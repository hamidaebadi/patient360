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
