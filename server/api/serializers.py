from __future__ import annotations

from typing import Any

from contacts.models import Appeal
from rest_framework import serializers


class AppealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appeal
        fields = ["id", "email", "name", "age", "info", "is_complete","created_at", "updated_at" ]

    def create_appeal(self, validated_data: dict[str, Any]) -> Appeal:
        appeal = super(AppealSerializer).create_appeal(validated_data)
        appeal.set_is_complete(appeal.is_complete)
        appeal.is_complete = False
        appeal.save()
        return appeal
