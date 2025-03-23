from rest_framework import serializers
from ..core.models import ContactMessage, Branch
from ..services.products.models import (
    Product, StoreLocation, ProductLocation, Category, ShoppingList, ShoppingListItem
)

class ContactMessageSerializer(serializers.ModelSerializer):
    """Serializer for Contact Message API."""
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

# ✅ New Serializer for Shopping List
class ShoppingListItemSerializer(serializers.ModelSerializer):
    """Serializer for individual shopping list items."""
    product = ProductSerializer(read_only=True)  # Include full product details

    class Meta:
        model = ShoppingListItem
        fields = ["product", "quantity"]

class ShoppingListSerializer(serializers.ModelSerializer):
    """Serializer for shopping list with all items."""
    items = ShoppingListItemSerializer(source="shoppinglistitem_set", many=True, read_only=True)

    class Meta:
        model = ShoppingList
        fields = ["id", "user", "created_at", "items"]
