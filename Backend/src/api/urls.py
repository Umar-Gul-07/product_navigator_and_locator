from django.urls import path, include
from .views import contact_view, ContactMessageListCreateAPIView, ProductListView

urlpatterns = [
    # Authentication routes
    path('accounts/', include('allauth.urls')),  # Allauth authentication routes
    path('auth/', include('dj_rest_auth.urls')),  # REST authentication
    path('auth/registration/', include('dj_rest_auth.registration.urls')),  # Registration routes

    # Contact Routes
    path('contact/', contact_view, name='contact'),
    path('api/contact/', ContactMessageListCreateAPIView.as_view(), name='api-contact'),

    # Product API Route (Updated for consistency)
    path('api/products/', ProductListView.as_view(), name='product-list'), 
]
