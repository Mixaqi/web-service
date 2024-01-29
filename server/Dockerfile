FROM python:3.12

WORKDIR /server

COPY ../requirements.txt .

RUN pip install -r requirements.txt
    mkdir -p /vol/web/static &&  \
    mkdir -p /vol/web/media 

COPY . /server/