from django.urls import path
from . import views

urlpatterns = [
    # This catches the 'calculate/' part and runs your python logic
    path('calculate/', views.calculate_commission, name='calculate_commission'),
]