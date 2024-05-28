FROM node:16.14.0
WORKDIR /usr/app
COPY . .
COPY package*.json ./

RUN npm install

EXPOSE 3333
CMD ["npm", "run", "dev"]