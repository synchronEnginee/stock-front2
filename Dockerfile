FROM node:19-alpine
ENV NODE_VERSION 19.0.0
WORKDIR /usr/app/stock-front2
COPY ./ /usr/app/stock-front2
EXPOSE 3000
ENV CI=true