FROM node:14.15.3-alpine3.10

RUN npm install -g npm \
 && apk update \
 && apk add git \
 && npm install -g create-react-app 
 
ENV CI=true
# CMD [ "yarn", "install" ]
