#!/usr/bin/env bun
import { startServer } from "./tests/fixtures/start-server"

const port = process.env.PORT ? Number.parseInt(process.env.PORT) : 3062

console.log(`Starting server on port ${port}...`)

const server = await startServer({
  port,
  testDbName: "production",
})

console.log(`Server running at http://localhost:${port}`)

// Handle graceful shutdown
process.on("SIGINT", async () => {
  console.log("\nShutting down server...")
  await server.stop()
  process.exit(0)
})
