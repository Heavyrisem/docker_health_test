FROM node:alpine

WORKDIR /app
COPY . .

RUN apk --no-cache add curl
RUN yarn install
RUN yarn build:swc


CMD ["yarn", "start"]