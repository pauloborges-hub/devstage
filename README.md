# 🚀 NLW Node.js API

This project is a backend API built with **Fastify** and **TypeScript**, using modern tooling and a clean architecture. It implements a referral system with ranking and user statistics features.

---

## 📦 Tech Stack

### Core

- **Fastify**: High-performance web framework for Node.js
- **Zod**: Type-safe schema validation
- **Drizzle ORM**: TypeScript-first SQL ORM
- **Postgres**: SQL database
- **ioredis**: Redis client for caching and messaging

### Documentation

- **@fastify/swagger** + **swagger-ui**: API documentation generation and UI
- **@fastify/cors**: CORS middleware

---

## 🧰 Dev Tooling

- **TypeScript**: Static type-checking
- **Tsup**: Bundler for building Node.js apps
- **TSX**: Fast TypeScript execution and file watching
- **Drizzle Kit**: SQL migrations and schema management
- **Biome**: Code formatting and linting

---

## 📂 Scripts

- `dev`: Run the development server with live reload (`tsx watch`)
- `build`: Compile the project using `tsup`

---

## 📁 Project Structure

```bash
nlw-nodejs/
├── src/
│   └── server.ts     # Main entry point of the server
├── .env              # Environment configuration
├── package.json      # Project manifest
├── tsconfig.json     # TypeScript configuration
```

---

## 📌 Setup & Running

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build the project
npm run build
```
