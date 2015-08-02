FROM ubuntu:15.04
MAINTAINER patel_sanjay@live.com

RUN apt-get update
RUN apt-get install -y nodejs npm

ADD . /src

RUN cd /src; npm install

EXPOSE 8080
CMD ["nodejs", "/src/app.js"]