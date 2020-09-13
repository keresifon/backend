FROM node:14.8.0
WORKDIR /ecomapi
COPY . .
RUN npm install
EXPOSE 5000
CMD ["node", "server.js"]