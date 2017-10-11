# xproduct

Small experiment with react and redux communicating with a django based REST
API.

# Running

You can run it with docker:

    $ docker-compose up -d

Then migrate the database (only required in the first run):

    $ docker-compose run api python manage.py migrate

To access it in the browser, check what port was associated in the host.
For example:

    $ docker ps
    CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                         PORTS                            NAMES
    3c1a9155a238        xproduct_api        "python manage.py ..."   4 minutes ago       Restarting (0) 6 seconds ago                                    xproduct_api_run_1
    73da9e6eaf76        xproduct_ui         "/bin/sh -c 'nginx'"     6 minutes ago       Up 6 minutes                   443/tcp, 0.0.0.0:32771->80/tcp   xproduct_ui_1
    abb39ba1d873        xproduct_api        "/bin/sh -c 'uwsgi..."   6 minutes ago       Up 6 minutes                                                    xproduct_api_1
    47f5c7d6a308        postgres            "docker-entrypoint..."   6 minutes ago       Up 6 minutes                   5432/tcp                         xproduct_db_1

See the column PORTS for the `xproduct_ui` container. In this case
the port mapped was `32771`, so you should be able to access via
browser through http://localhost:32771
