FROM ubuntu:18.04
RUN apt update && apt install -y curl nodejs
RUN apt install -y npm git
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt update && apt install -y nodejs
WORKDIR /var/www
RUN git clone https://github.com/aiilui93/middle.messenger.praktikum.yandex.git
WORKDIR /var/www/middle.messenger.praktikum.yandex
RUN npm install
EXPOSE 3000
#CMD /bin/sh
CMD npm run build && node ./server.js
