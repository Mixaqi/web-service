from __future__ import annotations

from contacts.models import Appeal
from report.models import Report
from rest_framework import viewsets

from api.serializers import AppealSerializer, ReportSerializer


class AppealViewSet(viewsets.ModelViewSet):
    serializer_class = AppealSerializer
    queryset = Appeal.objects.filter(is_complete = False)

class ReportViewSet(viewsets.ModelViewSet):
    serializer_class = ReportSerializer
    queryset = Report.objects.filter(is_complete = False)
