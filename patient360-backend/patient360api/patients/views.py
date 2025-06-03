from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Patient
from .serializers import PatientSerializer
from django.http import Http404

class PatientList(APIView):
    """
    List all paitents, or create a new patient
    """
    def get(self, request):
        patients = Patient.objects.all()
        serializer = PatientSerializer(patients, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = PatientSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class PatientDetail(APIView):
    """
    Retrieve, update or delete a patient instance
    """

    def get_patient(self, patient_id):
        try:
            return Patient.objects.get(patient_id = patient_id)
        except Patient.DoesNotExist:
            raise Http404
        
    def get(self, request, patient_id):
        patient = self.get_patient(patient_id)
        serializer = PatientSerializer(patient)
        return Response(serializer.data)
    

        


