# Build 
FROM node:12 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# deploy
FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/build usr/share/nginx/html
RUN apk update && apk add curl
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
