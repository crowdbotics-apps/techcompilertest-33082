from django.conf import settings
from django.db import models


class Employ(models.Model):
    "Generated Model"
    name = models.TextField()
    department = models.TextField()
    email = models.TextField()
