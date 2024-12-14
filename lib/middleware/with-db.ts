import type { DbClient } from "lib/db/db-client"
import { createDatabase } from "lib/db/db-client"
import type { Middleware } from "winterspec"

declare global {
  var db: DbClient
}

export const withDb: Middleware<
  {},
  {
    db: DbClient
  }
> = async (req, ctx, next) => {
  if (!ctx.db) {
    if (!globalThis.db) {
      globalThis.db = createDatabase()
    }
    ctx.db = globalThis.db
  }
  return next(req, ctx)
}
