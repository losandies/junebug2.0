from django.db import models

from backend.users.models import UserAccount

# Create your models here.


class Mentor(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    skills = models.ManyToManyField(Skill)
    years_of_experience = models.IntegerField(null=False)
    hourly_rate = models.DecimalField(max_digits=5, decimal_places=2, null=False)
    is_available = models.BooleanField(default=True)
    is_virtual = models.BooleanField(null=False)

    def __str__(self):
        return self.user
