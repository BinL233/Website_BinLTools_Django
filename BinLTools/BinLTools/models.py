from django.db import models

class Message(models.Model):
    name = models.CharField(max_length=100)
    messages = models.TextField(max_length=300)
    created_by = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name