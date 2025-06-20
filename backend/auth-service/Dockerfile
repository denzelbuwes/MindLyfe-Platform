FROM node:22-alpine as development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:22-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY --from=development /usr/src/app/dist ./dist

USER node

CMD ["node", "dist/main"]

FROM node:22-alpine

WORKDIR /app

COPY --from=production /usr/src/app/package*.json ./
COPY --from=production /usr/src/app/dist ./dist
COPY --from=production /usr/src/app/node_modules ./node_modules

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD wget -qO- http://localhost:3001/health/ping || exit 1

ENV NODE_ENV=production
ENV PORT=3001

EXPOSE 3001

USER node

CMD ["node", "dist/main.js"] 