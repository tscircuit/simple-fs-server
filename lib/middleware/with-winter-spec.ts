import { createWithWinterSpec } from "winterspec"
import { withDb } from "./with-db"

export const withRouteSpec = createWithWinterSpec({
  apiName: "tscircuit Debug API",
  productionServerUrl: "https://debug-api.tscircuit.com",
  beforeAuthMiddleware: [],
  authMiddleware: {},
  afterAuthMiddleware: [withDb],
})
