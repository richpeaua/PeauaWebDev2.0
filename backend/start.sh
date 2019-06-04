#!/bin/sh

# wait for Postgres to start
function postgres_ready(){
python << END
import sys
import psycopg2
try:
    conn = psycopg2.connect(dbname="peaua_db", user="peauaio", password="password", host="db")
except psycopg2.OperationalError:
    sys.exit(-1)
sys.exit(0)
END
}

until postgres_ready; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

python manage.py makemigrations blog
python manage.py makemigrations
python manage.py migrate blog
python manage.py migrate

echo Starting Gunicorn.
exec gunicorn backend.wsgi \
    --bind 0.0.0.0:8000 \
    --workers 2
