FROM node:14

WORKDIR /

COPY ./package.json .
RUN npm cache clean --force
RUN npm install
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]