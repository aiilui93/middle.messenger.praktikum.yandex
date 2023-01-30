FROM node:16.19
WORKDIR /var/www
RUN git clone https://github.com/aiilui93/middle.messenger.praktikum.yandex.git -b sprint_4
WORKDIR /var/www/middle.messenger.praktikum.yandex
RUN npm install
EXPOSE 3000
CMD npm run build && node ./server.js
