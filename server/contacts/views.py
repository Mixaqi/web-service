from __future__ import annotations

from django.http import HttpRequest, JsonResponse

from server.api.serializers import AppealSerializer

from .telegram_service import send_telegram_message


def handle_appeal(request: HttpRequest) -> JsonResponse:
    if request.method == "POST":
        serializer = AppealSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            message=f"New appeal: {serializer.data}"
            send_telegram_message(message)
            return JsonResponse({"status": "succes", "message": "Appeal succesfully submitted"})
        else:
            return JsonResponse({"status": "error", "errors": serializer.errors}, status=400)
    else:
        return JsonResponse({"status": "error", "message": "GET method is not supported"})
