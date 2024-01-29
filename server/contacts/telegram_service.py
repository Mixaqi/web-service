from __future__ import annotations

import telebot
from django.views.decorators.http import require_POST

# TELEGRAM_CHAT_ID=os.environ.get("TELEGRAM_CHAT_ID")
# TELEGRAM_BOT_TOKEN=os.environ.get("TELEGRAM_BOT_TOKEN")

TELEGRAM_BOT_TOKEN="6420917896:AAF4ZQtEL7Dg_QjF58L-SXEygLl4AXmnexc"
TELEGRAM_CHAT_ID="1935611743"

bot = telebot.TeleBot(TELEGRAM_BOT_TOKEN)

def send_telegram_message(text:str, chat_id: str) -> None:
    print("test")
    bot.send_message(chat_id = chat_id, text=text)
