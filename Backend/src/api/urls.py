from django.urls import path, include
from .views import contact_view, ContactMessageListCreateAPIView, ProductListView, BranchListAPIView, StoreLocationListAPIView,get_category_location,CategoryListView

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
    path('api/categories/', CategoryListView.as_view(), name='category-list'), 
    path('api/branches/', BranchListAPIView.as_view(), name='branch-list'),
    path('api/location/', StoreLocationListAPIView.as_view(), name='location'),
    path('product-location/<str:product_name>/', get_category_location, name="product-location"),

]
