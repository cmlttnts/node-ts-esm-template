FROM node:lts-buster AS builder

WORKDIR /app

COPY . .

# no fund no audit npm ci
RUN npm ci --no-audit --no-fund

RUN npm run build

FROM node:lts-buster-slim AS release

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

RUN npm ci --only=production --no-audit --no-fund

CMD ["node", "./dist/index.js"]