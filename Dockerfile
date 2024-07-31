FROM node:20-alpine AS build
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn run build

FROM node:20-alpine
WORKDIR /app
COPY --from=build /app /app

EXPOSE 3000

CMD ["yarn", "run", "dev"]
