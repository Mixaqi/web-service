from __future__ import annotations

from authentication.models import User
from contacts.models import Appeal
from report.models import Report
from rest_framework import generics, viewsets
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView

from api.serializers import (
    AppealSerializer,
    MyTokenObtainPairSerializer,
    RegisterSerializer,
    ReportSerializer,
)


class AppealViewSet(viewsets.ModelViewSet):
    serializer_class = AppealSerializer
    queryset = Appeal.objects.filter(is_complete = False)

class ReportViewSet(viewsets.ModelViewSet):
    serializer_class = ReportSerializer
    queryset = Report.objects.filter(is_complete = False)

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    queryset = User.objects.all()
    permission_classes = (AllowAny,)

