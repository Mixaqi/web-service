from __future__ import annotations

from django.urls import path
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView

from api import views
from api.views import AppealViewSet, ReportViewSet

router = DefaultRouter()
router.register("appeals", AppealViewSet)
router.register("reports", ReportViewSet)

urlpatterns = [
    path("token/", views.MyTokenObtainPairView.as_view()),
    path("token/refresh/", TokenRefreshView.as_view()),
    path("register/", views.RegisterView.as_view()),
    path("dashboard/", views.dashboard),
]

urlpatterns.extend(router.urls)
