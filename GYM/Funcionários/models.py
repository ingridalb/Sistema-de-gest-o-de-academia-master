from django.db import models

class Funcionário(models.Model):

    nome = models.CharField(max_length=80)
    idade = models.IntegerField()
    celular = models.CharField(max_length=14)
    endereco = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.nome

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        super().delete(*args, **kwargs)

    class Meta:
        verbose_name = 'Funcionário'
        verbose_name_plural = 'Funcionários'
