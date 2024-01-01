from __future__ import annotations

from contacts.models import Appeal
from django.http import JsonResponse


def api_home(request, *args, **kwargs):
    model_data = Appeal.objects.all().order_by("?").first()
    data = {}
    if model_data:
        data["id"] = model_data.id
        data["is_complete"] = model_data.is_complete
        data["email"] = model_data.email
        data["age"] = model_data.age
        data["description"] = model_data.description
        data["created_at"] = model_data.created_at
        data["updated_at"] = model_data.updated_at
    return JsonResponse(data)
