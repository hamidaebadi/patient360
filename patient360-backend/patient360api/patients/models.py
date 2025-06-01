from django.db import models

class Patient(models.Model):

    GENDER = {
        'M':'Male',
        'F':'Female',
        'O': 'Other'
    }

    patient_id = models.UUIDField(primary_key=True)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    date_birth = models.DateField(null=False)
    gender = models.CharField(choices=GENDER)
    middle_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    address = models.CharField(max_length=255)


