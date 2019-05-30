#!bin/bash

#start Gunicorn process
echo Starting Gunicorn.
exec gunicorn backend.wsgi \
    --workers 3