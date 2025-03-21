from django.shortcuts import render, redirect
from django.contrib import messages
from ..core.forms import ContactForm
from rest_framework import generics
from ..core.models import ContactMessage
from .serializers import ContactMessageSerializer, ProductSerializer
from django.views.generic import ListView
from ..services.products.models import Product

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