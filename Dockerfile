FROM node:20

WORKDIR /inkalzado

COPY  package*.json ./

RUN npm install

COPY . .

CMD [ "node","start" ]
