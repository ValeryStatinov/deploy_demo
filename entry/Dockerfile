FROM nginx:latest

COPY ./default.conf /etc/nginx/conf.d/

EXPOSE 5000

WORKDIR /usr/share/nginx/root

CMD ["/bin/sh", "-c", "nginx -g \"daemon off;\""]
