from __future__ import annotations

from rest_framework.routers import DefaultRouter

from api.views import AppealViewSet, ReportViewSet

router = DefaultRouter()
router.register("appeals", AppealViewSet)
router.register("reports", ReportViewSet)

urlpatterns = []

urlpatterns.extend(router.urls)
