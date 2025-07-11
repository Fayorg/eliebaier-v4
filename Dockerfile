FROM node:22-alpine AS builder

WORKDIR /app
COPY package.json yarn.lock* package-lock.json* ./

RUN npm install --frozen-lockfile || yarn install --frozen-lockfile

COPY prisma ./prisma/
RUN npx prisma generate

COPY . .

RUN npm run build



FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

COPY --from=builder /app/app/generated/prisma ./prisma/

EXPOSE 3000

CMD ["npm", "start"]