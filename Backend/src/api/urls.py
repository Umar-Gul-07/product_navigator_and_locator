from django.urls import path, include

urlpatterns = [
    path('accounts/', include('allauth.urls')),  # Allauth authentication routes
    path('auth/', include('dj_rest_auth.urls')),  # REST authentication
    path('auth/registration/', include('dj_rest_auth.registration.urls')),  # Registration routes
]
