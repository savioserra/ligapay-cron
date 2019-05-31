FROM node:11.3-alpine

WORKDIR /ligapay-cron

COPY . ./
RUN yarn

CMD [ "yarn", "start" ]