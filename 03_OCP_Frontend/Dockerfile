### STAGE 1: Build ###
FROM node:16.10-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run buildnoconfig
RUN cat ./src/environments/environment.ts

FROM nginx:stable

# Copy the build output to replace the default nginx contents.

# RUN chgrp -R root /var/cache/nginx /var/run /var/log/nginx && \
#     chmod -R 770 /var/cache/nginx /var/run /var/log/nginx
 

COPY --from=build /usr/src/app/dist/rpdlogistica  /usr/share/nginx/html
COPY start-nginx.sh /usr/bin/start-nginx.sh
COPY nginx.conf /etc/nginx/conf.d/

RUN ls -ltra /usr/src
RUN chmod +x /usr/bin/start-nginx.sh

WORKDIR /usr/share/nginx/html

#openshift
RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx /usr/share/nginx/html/assets/env.js /usr/share/nginx/html/assets/env.template.js
RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx 

RUN sed -i.bak 's/listen\(.*\)80;/listen 8081;/' /etc/nginx/conf.d/default.conf
RUN ls -ltra /etc/nginx/conf.d/
RUN sed -i.bak 's/^user/#user/' /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 8081
ENTRYPOINT [ "start-nginx.sh" ]