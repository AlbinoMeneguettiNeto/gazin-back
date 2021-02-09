FROM node:lts-alpine

WORKDIR /usr/www

RUN apk add --no-cache bash

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build
