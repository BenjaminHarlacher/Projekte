FROM node:14.12.0-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm cache clean --force
RUN npm i
COPY . .
RUN npm run build
EXPOSE 80
FROM nginx:1.18.0-alpine 
COPY --from=build /usr/src/app/dist/angular-tour-of-heroes /usr/share/nginx/html