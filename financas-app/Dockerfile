FROM node:16-alpine

EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
EXPOSE 19006

WORKDIR /usr/app

COPY package*.json ./
RUN npm install
RUN npm install --global expo-cli
COPY . .

# Set up a default command
CMD [ "npm", "start" ]