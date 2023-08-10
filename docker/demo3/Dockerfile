FROM alpine:3.14.1

WORKDIR /server

RUN apk add nodejs npm

COPY index.js package.json package-lock.json static.txt ./

RUN npm install

CMD ["node", "index.js"]
