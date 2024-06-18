from rest_framework import viewsets
from .models import Funcionário
from .serializers import FuncionárioSerializer

class FuncionáriosViewSet(viewsets.ModelViewSet):
    queryset = Funcionário.objects.all()
    serializer_class = FuncionárioSerializer
