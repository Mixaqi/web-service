from __future__ import annotations

from typing import Any

from authentication.models import User
from contacts.models import Appeal
from report.models import Report
from rest_framework import generics, status, viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
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

@api_view(["GET", "POST"])
@permission_classes([IsAuthenticated])
def dashboard(request: Any) -> Response:
    if request.method == "GET":
        context = f"{request.user}, GET response"
        return Response({"response": context}, status=status.HTTP_200_OK)
    elif request.method == "POST":
        text = request.data.get("text")
        response = f"Hey {request.user}, your text is {text}"
        return Response({"response": response}, status=status.HTTP_200_OK)
    return Response({}, status=status.HTTP_400_BAD_REQUEST)
