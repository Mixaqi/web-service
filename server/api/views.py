from __future__ import annotations

from contacts.models import Appeal
from rest_framework import viewsets

from api.serializers import AppealSerializer


class AppealViewSet(viewsets.ModelViewSet):
    serializer_class = AppealSerializer
    queryset = Appeal.objects.filter(is_complete = False)
