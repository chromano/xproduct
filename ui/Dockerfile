FROM node:8
ENV NODE_ENV=production
RUN mkdir -p /app
WORKDIR /app
RUN yarn global add bower gulp
ADD package.json /app
RUN yarn install
COPY . /app
RUN yarn build

FROM kyma/docker-nginx
COPY --from=0 ./app/build /var/www
RUN rm /etc/nginx/sites-enabled/*
COPY xproduct.conf /etc/nginx/sites-enabled/
EXPOSE 80
CMD 'nginx'
