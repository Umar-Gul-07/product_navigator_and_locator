from django.contrib import admin
from .models import Category, Product, ShoppingList, ShoppingListItem, StoreLocation, ProductLocation,Branch

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price', 'stock', 'discount_percentage', 'discount_active','featured_product')
    search_fields = ('name',)
    list_filter = ('category',)

@admin.register(ShoppingList)
class ShoppingListAdmin(admin.ModelAdmin):
    list_display = ('user', 'created_at')
    search_fields = ('user__username',)

@admin.register(ShoppingListItem)
class ShoppingListItemAdmin(admin.ModelAdmin):
    list_display = ('shopping_list', 'product', 'quantity')
    search_fields = ('shopping_list__user__username', 'product__name')

@admin.register(StoreLocation)
class StoreLocationAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

@admin.register(ProductLocation)
class ProductLocationAdmin(admin.ModelAdmin):
    list_display = ('product', 'store_location', 'aisle_number', 'section')
    search_fields = ('product__name', 'store_location__name')



@admin.register(Branch)
class BranchAdmin(admin.ModelAdmin):
    list_display = ('name', 'address', 'phone', 'rating', 'status')
    search_fields = ('name', 'address', 'phone')
    list_filter = ('status',)