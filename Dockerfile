FROM ubuntu:latest
LABEL Name=tictactoe Version=0.0.1
RUN apt-get -y update && apt-get -y upgrade

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV TZ=Europe/Moscow
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# copy app
COPY . ./

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_14.x — Node.js 14 LTS "Fermium" | bash -
RUN apt install -y nodejs
RUN npm install serve
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm run-script build


CMD serve -l 80 build
