from rest_framework import serializers
from .models import Funcionário

class FuncionárioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Funcionário
        fields = '__all__'
