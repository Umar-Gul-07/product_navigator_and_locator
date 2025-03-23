from django.shortcuts import render, redirect
from django.contrib import messages
from ..core.forms import ContactForm
from rest_framework import generics
from ..core.models import ContactMessage, Branch
from .serializers import ContactMessageSerializer, ProductSerializer, BranchSerializer, StoreLocationSerializer, ProductLocationSerializer,CategorySerializer
from django.views.generic import ListView
from ..services.products.models import Product,StoreLocation, ProductLocation, Category
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.db.models import Q
from django.http import JsonResponse


def contact_view(request):
    """
    Handles the contact form submission.
    """
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Your message has been sent successfully!")
            return redirect('contact')  # Redirect to contact page after submission
    else:
        form = ContactForm()

    return render(request, 'contact.html', {'form': form})


# API View for Contact Messages
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
    """
    API view to retrieve a list of branches.
    """
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer
    

class StoreLocationListAPIView(generics.ListAPIView):
    """
    API view to retrieve a list of branches.
    """
    queryset = StoreLocation.objects.all()
    serializer_class = StoreLocationSerializer\
        


def get_category_location(request, category_name):
    products = Product.objects.filter(category__name=category_name)
    
    if not products.exists():
        return JsonResponse({"error": "Category not found"}, status=404)
    
    first_product = products.first()  
    location = ProductLocation.objects.get(product=first_product)

    return JsonResponse({
        "lat": location.store_location.lat,
        "lng": location.store_location.lng,
        "category": category_name
    })
