from __future__ import annotations

from django.urls import path
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView

from api import views
from api.views import AppealViewSet, ReportViewSet

from . import views

router = DefaultRouter()
router.register("appeals", AppealViewSet)
router.register("reports", ReportViewSet)

urlpatterns = [
    path("token/", views.MyTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("register/", views.RegisterView.as_view(), name="auth_register"),
    #path("dashboard/", views.dashboard),
    #path("", views.getRoutes),
]

urlpatterns.extend(router.urls)
