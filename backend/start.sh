#!/bin/sh

#start Gunicorn process
echo Starting Gunicorn.
exec gunicorn backend.wsgi \
    --bind 0.0.0.0:8000 \
    --workers 3
