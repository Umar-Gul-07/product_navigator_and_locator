from rest_framework import serializers
from ..core.models import ContactMessage

class ContactMessageSerializer(serializers.ModelSerializer):
    """
    Serializer for Contact Message API.
    """
    class Meta:
        model = ContactMessage
        fields = '__all__'
