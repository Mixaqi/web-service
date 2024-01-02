from __future__ import annotations

from rest_framework.routers import DefaultRouter

from api.views import AppealViewSet

router = DefaultRouter()
router.register("appeals", AppealViewSet)

urlpatterns = []

urlpatterns.extend(router.urls)
