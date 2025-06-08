from django.http import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import VitalSign
from .serializers import VitalSignSerializer

class VitalSignList(APIView):
    """
    List all vital signs for all users
    """

    def get(self, request):
        vitals = VitalSign.objects.all()
        serializer = VitalSignSerializer(vitals, many = True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = VitalSignSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VitalSignDetail(APIView):
    def get(self, request, patient_id):
        try:
            print(patient_id)
            vitals = VitalSign.objects.get(patient_id = patient_id)
            serializer = VitalSignSerializer(vitals, many = True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except VitalSign.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        

   
    
