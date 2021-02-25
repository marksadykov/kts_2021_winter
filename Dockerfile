FROM node:10.16.0-alpine as frontend_builder

WORKDIR /code

# Установка библиотек
COPY money-talk/package.json .
RUN npm install

# Установка кода приложения
COPY money-talk/public public
COPY money-talk/src src
RUN npm build
# <----- ЗАКОНЧИЛСЯ fronteend_builder

FROM nginx:alpine

COPY --from=frontend_builder /code/build/ /usr/share/nginx/html
ADD nginx.conf /etc/nginx/conf.d/default.conf.template
COPY docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]

