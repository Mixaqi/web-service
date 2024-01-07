from __future__ import annotations

from typing import Any

from authentication.models import User
from contacts.models import Appeal
from django.contrib.auth.password_validation import validate_password
from report.models import Report
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class AppealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appeal
        fields = ["id", "email", "name", "age", "info", "is_complete","created_at", "updated_at" ]

    def create_appeal(self, validated_data: dict[str, Any]) -> Appeal:
        appeal = super(AppealSerializer).create_appeal(validated_data)
        #appeal.set_is_complete(appeal.is_complete)
        appeal.is_complete = False
        appeal.save()
        return appeal

class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = ["id", "is_complete", "markers", "text_data", "email", "photo", "created_at", "updated_at"]

    def create_report(self, validated_data: dict[str, Any]) -> Report:
        report = super(ReportSerializer).create_report(validated_data)
        report.is_complete = False
        report.save()
        return report

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email"]

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user) -> dict[str, Any]:
        token = super().get_token(user)
        token["full_name"] = user.profile.full_name
        token["username"] = user.username
        token["email"] = user.email
        token["bio"] = user.profile.bio
        token["image"] = str(user.profile.image)
        token["verified"] = user.profile.verified
        return token

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only = True, required = True, validators = [validate_password],
    )
    confirmed_password = serializers.CharField(
        write_only = True, required = True,
    )
    class Meta:
        model = User
        fields = ["email", "username", "password", "confirmed_password"]

    def validate(self, attrs: dict[str, Any]) -> dict[str, Any]:
        if attrs["password"] != attrs["confirmed_password"]:
            raise serializers.ValidationError(
                {"password": "Password fields does not match"},
            )
        return attrs

    def create(self, validated_data: dict[str, Any]) -> User:
        user = User.objects.create(
            username=validated_data["username"],
            email=validated_data["email"],
        )
        user.set_password(validated_data["password"])
        user.save()
        return user

