FROM python:3.12

WORKDIR /server

COPY ../requirements.txt .

RUN pip install -r requirements.txt
    # mkdir -p /vol/web/static &&  \
    # mkdir -p /vol/web/media && \
    # chmod +x ./server
    # chown -R Mixaqi:server /vol && \
    # chmod -R 755 /vol

COPY . /server/

# EXPOSE 8000

# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
