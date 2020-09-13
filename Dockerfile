FROM node:14.8.0
WORKDIR /ecomweb
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]