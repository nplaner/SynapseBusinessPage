FROM node:10-alpine

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "start"]