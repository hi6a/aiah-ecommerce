FROM node:20.9.0 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
#after istallig, bild te app
COPY . .
RUN npm run build --prod
# dont use nginx for now, use the default 4200. with nginx lnly the homepage will open
# the routing will be bad
# FROM nginx:alpine
# npm run
FROM node:20.9.0 AS serve
WORKDIR /app
COPY package*.json ./
RUN npm install -g @angular/cli
COPY --from=build /app/dist/final-project /app/dist/final-project
EXPOSE 4200
CMD ["npx", "http-server", "dist/your-angular-app-name"]