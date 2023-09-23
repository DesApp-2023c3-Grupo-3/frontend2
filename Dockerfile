# Etapa de compilación
FROM node:14 AS builder

ENV REACT_APP_WEBSOCKET_HOST=localhost

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Etapa de producción
FROM nginx:alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Copia los archivos estáticos de la etapa de compilación
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

# Expone el puerto 80 para servir la aplicación React
EXPOSE 80

# Inicia el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]