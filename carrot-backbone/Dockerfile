FROM node:14

WORKDIR /

COPY ./package.json .
RUN npm cache clean --force
RUN npm install
COPY . .

EXPOSE 5000

CMD [ "node", "index.js" ]