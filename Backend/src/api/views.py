from django.shortcuts import render, redirect
from django.contrib import messages
from rest_framework import generics
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User

from ..core.forms import ContactForm
from ..core.models import ContactMessage, Branch
from ..services.products.models import Product, StoreLocation, ProductLocation, Category, ShoppingList, ShoppingListItem
from .serializers import (
    ContactMessageSerializer, ProductSerializer, BranchSerializer,
    StoreLocationSerializer,  CategorySerializer
)

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
@permission_classes([AllowAny])
def save_shopping_list(request):
    print("🔹 Received Data:", request.data)

    try:
        cart_items = request.data.get("items", [])

        if not cart_items:
            return Response({"error": "Cart is empty", "received_data": request.data}, status=400)

        # ✅ Assign user if authenticated, otherwise use a default user
        user = request.user if request.user.is_authenticated else User.objects.first()

        if not user:
            return Response({"error": "No valid user found"}, status=400)

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