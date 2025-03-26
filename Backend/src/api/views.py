from django.shortcuts import render, redirect
from django.contrib import messages
from rest_framework import generics
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from rest_framework.views import APIView

from ..core.forms import ContactForm
from ..core.models import ContactMessage, Branch
from ..services.products.models import Product, StoreLocation, ProductLocation, Category, ShoppingList, ShoppingListItem
from .serializers import (
    ContactMessageSerializer, ProductSerializer, BranchSerializer,
    StoreLocationSerializer,  CategorySerializer,ShoppingListSerializer
)
from rest_framework.authentication import TokenAuthentication
from rest_framework.exceptions import AuthenticationFailed
# ✅ Contact Form View
def contact_view(request):
    """Handles the contact form submission."""
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Your message has been sent successfully!")
            return redirect('contact')
    else:
        form = ContactForm()

    return render(request, 'contact.html', {'form': form})


# ✅ API Views for Contact Messages
class ContactMessageListCreateAPIView(generics.ListCreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer


class ProductListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class BranchListAPIView(generics.ListAPIView):
    """API view to retrieve a list of branches."""
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer


class StoreLocationListAPIView(generics.ListAPIView):
    """API view to retrieve a list of store locations."""
    queryset = StoreLocation.objects.all()
    serializer_class = StoreLocationSerializer


# ✅ Get Store Location for Category
def get_category_location(request, category_name):
    """Retrieve store location of the first product in a given category."""
    products = Product.objects.filter(category__name=category_name)

    if not products.exists():
        return JsonResponse({"error": "Category not found"}, status=400)

    first_product = products.first()
    location = ProductLocation.objects.filter(product=first_product).first()

    if not location:
        return JsonResponse({"error": "Location not found for this category"}, status=400)

    return JsonResponse({
        "lat": location.store_location.lat,
        "lng": location.store_location.lng,
        "category": category_name
    })


# ✅ Save Shopping List API
@api_view(["POST"])
@permission_classes([AllowAny])  # Keep it open, but manually authenticate
def save_shopping_list(request):
    print("🔹 Received Data:", request.data)

    try:
        cart_items = request.data.get("items", [])
        if not cart_items:
            return Response({"error": "Cart is empty", "received_data": request.data}, status=400)

        # ✅ Manually extract user from token
        auth = TokenAuthentication()
        try:
            user_auth_tuple = auth.authenticate(request)
            if not user_auth_tuple:
                raise AuthenticationFailed("Invalid token")
            user = user_auth_tuple[0]  # ✅ Get the authenticated user
        except AuthenticationFailed:
            return Response({"error": "Invalid or missing token"}, status=401)

        print("✅ Authenticated User:", user)

        # ✅ Now, the shopping list is correctly linked to the user
        shopping_list = ShoppingList.objects.create(user=user)

        for item in cart_items:
            try:
                product = get_object_or_404(Product, id=item["product_id"])
                ShoppingListItem.objects.create(
                    shopping_list=shopping_list,
                    product=product,
                    quantity=item.get("quantity", 1)
                )
            except Exception as e:
                print(f"⚠️ Error with product {item['product_id']}: {str(e)}")
                return Response({"error": f"Product issue: {str(e)}"}, status=400)

        return Response({"message": "Shopping list saved successfully!"}, status=201)

    except Exception as e:
        print(f"❌ Critical Error: {str(e)}")
        return Response({"error": f"Unexpected error: {str(e)}"}, status=400)
    

from rest_framework.authentication import TokenAuthentication
from rest_framework.exceptions import AuthenticationFailed

class UserShoppingListView(APIView):
    def get(self, request):
        # Manually extract user from token
        auth = TokenAuthentication()
        try:
            user_auth_tuple = auth.authenticate(request)
            if not user_auth_tuple:
                raise AuthenticationFailed("Invalid token")
            request.user = user_auth_tuple[0]
        except AuthenticationFailed:
            return Response({"error": "Invalid or missing token"}, status=401)

        # Fetch shopping lists for the logged-in user
        shopping_lists = ShoppingList.objects.filter(user=request.user)

        # Include shopping list items and product details
        data = []
        for shopping_list in shopping_lists:
            items = ShoppingListItem.objects.filter(shopping_list=shopping_list).select_related("product")
            
            # Serialize shopping list items
            item_data = [
                {
                    "product": {
                        "id": item.product.id,
                        "name": item.product.name,
                        "image": item.product.image.url if item.product.image else None,
                        "price": item.product.price,
                        "category": item.product.category.name if item.product.category else "Unknown",
                    },
                    "quantity": item.quantity
                }
                for item in items
            ]

            data.append({
                "id": shopping_list.id,
                "created_at": shopping_list.created_at,
                "items": item_data,  # ✅ Now includes product details
            })

        return Response(data, status=200)
