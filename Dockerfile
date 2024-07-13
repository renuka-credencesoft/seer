# Use official Node.js image as base
FROM node:18 AS build

# FROM node:16

COPY . .

RUN npm i

RUN npm i -g serve

RUN npm run build

CMD serve -s build

EXPOSE 3000