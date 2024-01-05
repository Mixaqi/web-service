from __future__ import annotations

from typing import Any

from contacts.models import Appeal
from report.models import Report
from rest_framework import serializers


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
