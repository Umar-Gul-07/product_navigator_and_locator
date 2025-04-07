from django import forms
from .models import Product, ProductDetails, Branch

class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = '__all__'
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        
        # If editing an existing product
        if self.instance and self.instance.pk and self.instance.branch:
            self.fields['details'].queryset = ProductDetails.objects.filter(
                category__in=self.instance.branch.categories.all()
            )
        
        # If creating a new product and branch is selected
        if 'branch' in self.data:
            try:
                branch_id = int(self.data.get('branch'))
                branch = Branch.objects.get(id=branch_id)
                self.fields['details'].queryset = ProductDetails.objects.filter(
                    category__in=branch.categories.all()
                )
            except (ValueError, TypeError, Branch.DoesNotExist):
                pass