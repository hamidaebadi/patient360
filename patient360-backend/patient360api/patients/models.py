from django.db import models
import uuid
GENDER = {
        'M':'Male',
        'F':'Female',
        'O': 'Other'
    }

class Patient(models.Model):

    patient_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    date_birth = models.DateField(null=False)
    gender = models.CharField(choices=GENDER)
    middle_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    address = models.CharField(max_length=255)
    ssn = models.CharField(max_length=4, blank=False, verbose_name="last 4 numbers of social security number", default="0000")


