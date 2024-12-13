import { it, expect } from "bun:test"
import { getTestServer } from "tests/fixtures/get-test-server"

it("GET /health should return ok", async () => {
  const { axios } = await getTestServer()
  const res = await axios.get("/health")
  expect(res.status).toBe(200)
  expect(res.data).toEqual({ ok: true })
})
