FROM mhart/alpine-node:12

WORKDIR /app
COPY . .
RUN pnpm install
RUN pnpm build