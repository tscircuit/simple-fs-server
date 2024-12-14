import { withRouteSpec } from "lib/middleware/with-winter-spec"
import { z } from "zod"

export default withRouteSpec({
  methods: ["GET"],
  queryParams: z.object({
    since: z.string().optional()
  }),
  jsonResponse: z.object({
    event_list: z.array(z.object({
      event_id: z.string(),
      event_type: z.literal("FILE_UPDATED"),
      file_path: z.string(),
      created_at: z.string()
    }))
  }),
})((req, ctx) => {
  const { since } = req.query
  return ctx.json({ event_list: ctx.db.listEvents(since) })
})
