from django.urls import path
from .views import VitalSignList, VitalSignDetail

urlpatterns = [
    path('vitalsigns/', VitalSignList.as_view()),
    path('vitalsigns/patient/<uuid:patient_id>/', VitalSignDetail.as_view())
]