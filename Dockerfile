FROM node:12-alpine
RUN addgroup app && adduser -S -G app app 
USER app
WORKDIR /ecomweb
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]







