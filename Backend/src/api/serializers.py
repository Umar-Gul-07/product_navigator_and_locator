from rest_framework import serializers
from ..core.models import ContactMessage
from ..services.products.models import Product

class ContactMessageSerializer(serializers.ModelSerializer):
    """
    Serializer for Contact Message API.
    """
    class Meta:
        model = ContactMessage
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=Product
        fields = '__all__'