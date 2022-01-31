FROM node:14-alpine

LABEL maintainer=brian@toimc.com

# 创建一个工作目录
WORKDIR /app

COPY . .

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories && apk update


RUN apk --no-cache add --virtual builds-deps build-base python alpine-sdk \
  && npm install -g cnpm --no-progress --registry=https://registry.npm.taobao.org \
  # && npm install --no-progress --registry=https://registry.npm.taobao.org \
  && cnpm install node-pre-gyp \
  && cnpm install --no-progress \
  && npm run build \
  && apk del builds-deps

EXPOSE 3000

VOLUME [ "/app" ]

CMD [ "npm", "run", "start:prod" ]
