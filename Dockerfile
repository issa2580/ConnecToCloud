FROM node:20

WORKDIR /src/app

COPY package.json ./

COPY yarn.lock ./

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]