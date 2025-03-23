from django.urls import path, include
from .views import (
    contact_view, 
    ContactMessageListCreateAPIView, 
    ProductListView, 
    BranchListAPIView, 
    StoreLocationListAPIView,
    get_category_location,
    CategoryListView,
    save_shopping_list
)

urlpatterns = [
    # 🔐 Authentication routes using Store (NO JWT)
    path('accounts/', include('allauth.urls')),  # Django Allauth authentication
    path('auth/', include('dj_rest_auth.urls')),  # REST authentication (login/logout)
    path('auth/registration/', include('dj_rest_auth.registration.urls')),  # User registration

    # 📩 Contact Routes
    path('contact/', contact_view, name='contact'),
    path('api/contact/', ContactMessageListCreateAPIView.as_view(), name='api-contact'),

    # 🛍 Product & Category Routes
    path('api/products/', ProductListView.as_view(), name='product-list'),
    path('api/categories/', CategoryListView.as_view(), name='category-list'),

    # 🏬 Branch & Location Routes
    path('api/branches/', BranchListAPIView.as_view(), name='branch-list'),
    path('api/location/', StoreLocationListAPIView.as_view(), name='location'),
    path('product-location/<str:product_name>/', get_category_location, name="product-location"),

    # 🛒 Shopping List Routes
    path("save-shopping-list/", save_shopping_list, name="save-shopping-list"),
]
