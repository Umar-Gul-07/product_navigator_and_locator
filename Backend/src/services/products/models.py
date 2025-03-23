from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    """
    Stores product categories such as Dairy, Snacks, Beverages, etc.
    """
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    """
    Stores product details such as name, category, price, stock, and image.
    """
    name = models.CharField(max_length=255, unique=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="products")
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField(default=0)
    image = models.ImageField(upload_to='product_images/', blank=True, null=True)
    discount_percentage = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    discount_active = models.BooleanField(default=False)
    featured_product = models.BooleanField(default=False)

    def __str__(self):
        return self.name
    
    def get_discounted_price(self):
        """Calculate the price after discount, if applicable."""
        if self.discount_active and self.discount_percentage:
            discount_amount = (self.price * self.discount_percentage) / 100
            return self.price - discount_amount
        return self.price


class ShoppingList(models.Model):
    """
    Represents a shopping list for each user.
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="shopping_lists")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username}'s Shopping List ({self.id})"


class ShoppingListItem(models.Model):
    """
    Stores individual products within a shopping list along with quantity.
    """
    shopping_list = models.ForeignKey(ShoppingList, on_delete=models.CASCADE, related_name="items")
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return f"{self.quantity} x {self.product.name} in {self.shopping_list}"


class StoreLocation(models.Model):
    """
    Represents different sections and aisles in the store.
    """
    name = models.CharField(max_length=100, unique=True)  # Example: Aisle 3, Dairy Section

    def __str__(self):
        return self.name


class ProductLocation(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="locations")
    store_location = models.ForeignKey(StoreLocation, on_delete=models.CASCADE)
    aisle_number = models.IntegerField()
    section = models.CharField(max_length=10, blank=True, null=True)  # Example: A, B, C
    latitude = models.FloatField()  # Needed for map navigation
    longitude = models.FloatField()  # Needed for map navigation

    def __str__(self):
        return f"{self.product.name} → {self.store_location.name} (Aisle {self.aisle_number}, Section {self.section})"
