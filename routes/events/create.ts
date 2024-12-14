import { withRouteSpec } from "lib/middleware/with-winter-spec"
import { z } from "zod"

export default withRouteSpec({
  methods: ["POST"],
  jsonBody: z.object({
    event_type: z.literal("FILE_UPDATED")
  }),
  jsonResponse: z.object({
    event: z.object({
      event_id: z.string(),
      event_type: z.literal("FILE_UPDATED"),
      file_path: z.string(),
      created_at: z.string()
    })
  }),
})(async (req, ctx) => {
  const { event_type } = await req.json()
  const event = ctx.db.createEvent({
    event_type,
    file_path: "manual-event",
    created_at: new Date().toISOString()
  })
  return ctx.json({ event })
})
