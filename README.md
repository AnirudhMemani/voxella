# Real-Time Chat App (Turborepo · WebSockets · Redis Pub/Sub)

A full-stack, horizontally-scalable chat application with direct messages and group
chats. Built as a Turborepo monorepo with real-time messaging over WebSockets, fanned
out across server instances using **Redis Pub/Sub**, a REST API for auth and users, and
PostgreSQL via Prisma.

## Architecture

<img width="13655" height="6799" alt="chat-app-architecture" src="https://github.com/user-attachments/assets/c55b674e-e88c-4d7c-b899-5cbe1e0c18f5" />

Clients open a WebSocket connection to a WebSocket server instance. Each chat room maps
to a Redis Pub/Sub channel: when a message is published, every WebSocket instance
subscribed to that room's channel receives it and forwards it to its locally-connected
clients. This decouples message delivery from any single server instance, so the
WebSocket layer can be scaled out horizontally behind a load balancer. Messages and chat
state are persisted to PostgreSQL through Prisma.

## Tech Stack

- **Monorepo:** Turborepo + npm workspaces
- **Frontend:** React, Vite, Tailwind CSS, shadcn/ui, Recoil, React Hook Form + Zod
- **Backend (REST):** Node.js, Express, JWT auth, Zod validation
- **Real-time:** `ws` WebSocket server with a typed message protocol
- **Message fan-out:** Redis Pub/Sub (via `ioredis`)
- **Database:** PostgreSQL with Prisma ORM
- **Media:** Cloudinary (profile and group images)

## Features

- Real-time direct messages and group chats over WebSockets
- Horizontal scalability of the WebSocket layer via Redis Pub/Sub
- JWT-based authentication (register / login)
- Group management: creation, admins, super-admin, member management
- Read receipts and per-user message visibility (deleted-for-me semantics)
- Image upload and cropping for profile and group pictures
- Type-safe, shared WebSocket message contracts between client and server

## Monorepo Layout

```
apps/
  frontend    React + Vite client
  backend     Express REST API (auth, users)
  websocket   WebSocket server + Redis Pub/Sub fan-out
packages/
  db          Prisma schema, migrations, and generated client
  messages    Shared WebSocket message types and payload builders
  common      Shared utilities
  ui          Shared UI components
  eslint-config, typescript-config
```

## Prerequisites

- Node.js >= 18
- PostgreSQL
- Redis

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start Redis and PostgreSQL

On macOS with Homebrew:

```bash
brew install redis postgresql@16
brew services start redis
brew services start postgresql@16
createdb voxella
```

### 3. Configure environment variables

Copy the example env files and fill in the values:

```bash
cp apps/backend/.env.example apps/backend/.env
cp apps/websocket/.env.example apps/websocket/.env
cp packages/db/.env.example packages/db/.env
```

- `packages/db/.env` and `apps/backend/.env` need the same `DATABASE_URL`
  (e.g. `postgresql://USER@localhost:5432/voxella`).
- `apps/backend/.env` and `apps/websocket/.env` must share the same `JWT_SECRET`.
- `apps/websocket/.env` uses `WS_URL` for the server **port** (default `8080`) and
  `REDIS_HOST` / `REDIS_PORT` for the Redis connection.
- The frontend falls back to `http://localhost:3000` and `ws://localhost:8080` if no
  `.env` is provided.
- Cloudinary keys are only required for image uploads.

### 4. Set up the database

```bash
cd packages/db && npx prisma migrate deploy && npx prisma generate && cd ../..
```

### 5. Run the app

```bash
npm run dev
```

This starts the frontend (Vite, usually on `http://localhost:5173`), the REST API
(`http://localhost:3000`), and the WebSocket server (`ws://localhost:8080`).

## Contributing

Contributions are welcome. Please fork the repository and open a pull request. Follow the
existing code style (Prettier + ESLint are configured) and keep changes scoped.
