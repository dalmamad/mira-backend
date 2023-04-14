FROM node:14-alpine
WORKDIR /mira-backend
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build
RUN npm run clean:modules
RUN npm i --production
CMD [ "npm" ,"run", "start:docker"]


