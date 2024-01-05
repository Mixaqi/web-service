from __future__ import annotations

from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models.signals import post_save


class User(AbstractUser):
    username=models.CharField(max_length=100)
    email=models.EmailField(unique = True)

    USERNAME_FIELD="email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self) -> str:
        return self.username


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name=models.CharField(max_length=100)
    bio = models.CharField(max_length=100)
    image=models.ImageField(default="default.jpg", upload_to="user_images")
    verified = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.full_name

# @receiver(post_save, sender=User)
def create_user_profile(sender: type[User], instance: User, created: bool, **kwargs: dict) -> None:
    if created:
        Profile.objects.create(user=instance)


# @receiver(post_save, sender=User)
def save_user_profile(sender: type[User], instance: User, **kwargs: dict) -> None:
    instance.profile.save()

post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)

