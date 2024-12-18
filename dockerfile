

FROM node:20.18.0-alpine

WORKDIR /app

COPY . .


RUN npm install

EXPOSE 8090

CMD ["npm", "start"]