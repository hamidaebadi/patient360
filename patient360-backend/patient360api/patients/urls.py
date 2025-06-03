from django.urls import path
from .views import PatientList, PatientDetail

urlpatterns = [
    path('patients/', PatientList.as_view()),
    path('patients/<uuid:patient_id>/', PatientDetail.as_view())
]