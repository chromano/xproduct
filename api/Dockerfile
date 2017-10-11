FROM lucidfrontier45/python-uwsgi
RUN pip install -U pip
RUN mkdir -p /www/api/
ADD . /www/api/
WORKDIR /www/api
RUN pip install -r requirements.txt
WORKDIR /www/api/

CMD uwsgi --wsgi-disable-file-wrapper --master --processes 4 --uwsgi-socket :3031 --need-app --wsgi-file api/wsgi.py
