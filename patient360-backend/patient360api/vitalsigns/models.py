from django.db import models
from django.utils import timezone
class VitalSign(models.Model):

    vitals_id = models.AutoField(primary_key=True)
    patient_id = models.ForeignKey(
        'patients.Patient',
        to_field='patient_id',
        on_delete=models.CASCADE
    )
    timestamp = models.DateTimeField(default=timezone.now)
    heart_rate = models.IntegerField()
    blood_pressure_systolic = models.IntegerField()
    blood_pressure_diastolic = models.IntegerField()
    respiratory_rate = models.IntegerField()
    temperature = models.DecimalField(max_digits=4, decimal_places=1)
    oxygen_saturation = models.DecimalField(max_digits=5, decimal_places=2)
    blood_glucose = models.DecimalField(max_digits=6, decimal_places=2)

