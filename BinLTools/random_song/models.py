from django.db import models

# Create your models here.
class RandomSong(models.Model):
    name = models.CharField(max_length=200)
    artist = models.CharField(max_length=200)
    url = models.CharField(max_length=200)