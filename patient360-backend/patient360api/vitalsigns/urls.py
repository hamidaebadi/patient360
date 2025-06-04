from django.urls import path
from .views import VitalSignList

urlpatterns = [
    path('vitalsigns/', VitalSignList.as_view())
]