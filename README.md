# Rest Express App

This project provides a minimal Express server with a Vite-powered React client.
It includes a health-check API and type-safe environment configuration using
[Zod](https://github.com/colinhacks/zod).

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and adjust as needed.
3. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` – start the server and Vite in development mode.
- `npm run build` – build the client and bundle the server for production.
- `npm start` – run the compiled server.
- `npm run check` – run TypeScript type checks.
- `npm test` – execute the test suite.

## Environment Variables

| Name            | Default                                                         | Description                      |
|-----------------|-----------------------------------------------------------------|----------------------------------|
| `NODE_ENV`      | `development`                                                   | Node environment mode            |
| `PORT`          | `5000`                                                          | Port the server listens on       |
| `DATABASE_URL`  | `postgresql://user:password@localhost:5432/appdb`               | Database connection string       |
| `SESSION_SECRET`| `default_session_secret`                                        | Secret for session signing       |

## API

- `GET /api/health` – returns `{ "status": "ok" }`.

## License

MIT
