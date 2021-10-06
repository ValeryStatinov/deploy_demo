FROM node:latest as build

COPY ./ /app

WORKDIR /app

RUN npm ci
RUN npm run build

FROM nginx:latest

COPY --from=build /app/build/ /usr/share/nginx/root/
COPY ./default.conf /etc/nginx/conf.d/

EXPOSE 3000

WORKDIR /usr/share/nginx/root

CMD ["/bin/sh", "-c", "nginx -g \"daemon off;\""]
