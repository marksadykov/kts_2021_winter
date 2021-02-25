FROM node:10.16.0-alpine as frontend_builder

WORKDIR /code

COPY tsconfig.json .
COPY package.json .
RUN npm install

COPY public public
COPY src src
RUN npm run-script build

FROM nginx:alpine

COPY --from=frontend_builder /code/build/ /usr/share/nginx/html
ADD nginx.conf /etc/nginx/conf.d/default.conf.template
COPY docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]
