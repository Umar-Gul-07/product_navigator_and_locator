from rest_framework import serializers
from ..core.models import ContactMessage, Branch
from ..services.products.models import Product, StoreLocation, ProductLocation,Category

class ContactMessageSerializer(serializers.ModelSerializer):
    """
    Serializer for Contact Message API.
    """
    class Meta:
        model = ContactMessage
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Category
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(slug_field='name', read_only=True)
    discounted_price = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = '__all__'
        
    def get_discounted_price(self, obj):
        """Return the discounted price for a single product, if applicable."""
        # Ensure we are working with a single Product instance
        if isinstance(obj, Product):
            return obj.get_discounted_price()
        return None

        
        

class BranchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Branch
        fields = '__all__'
        

class StoreLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = StoreLocation
        fields = '__all__'
        
class ProductLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductLocation
        fields = ['product', 'store_location', 'aisle_number', 'section']