FROM node:12-alpine
WORKDIR /ecomweb
COPY . .
RUN npm install
CMD ["npm", "start"]
EXPOSE 3000
