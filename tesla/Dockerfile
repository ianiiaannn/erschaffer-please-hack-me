FROM ubuntu:18.04
# env
ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8
# project and workdir
COPY ./app /home/tesla-flask
WORKDIR /home/tesla-flask
#tall py37
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3.7 \
    python3-pip \
    && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
# project setting
RUN pip3 install -r requirements.txt
EXPOSE 748
ENTRYPOINT python3 app.py
