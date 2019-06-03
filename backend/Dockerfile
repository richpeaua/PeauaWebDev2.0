# Dockerfile

# FROM directive instructing base image to build upon
FROM python:3.7-alpine

WORKDIR /app
# COPY gunicron startup script into known file location in container

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY requirements.txt /app/requirements.txt

RUN apk update \
    && apk add --virtual build-deps gcc python3-dev musl-dev \
    && apk add postgresql-dev \
    && pip install psycopg2 \
    && apk del build-deps

RUN pip install -r requirements.txt

COPY start.sh /start.sh

COPY . /app/.
# EXPOSE port 8000 to allow communication to/from server
EXPOSE 8000

RUN chmod +x /app/start.sh

# CMD specifies the command to execute to start the server running
CMD ["/app/start.sh"]


