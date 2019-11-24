FROM node:10

WORKDIR /app/reqidentify

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000
CMD [ "node", "app.js" ]
