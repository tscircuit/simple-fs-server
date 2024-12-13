import bundle from "dist/bundle"
import { getNodeHandler } from "winterspec/adapters/node"

const handler = getNodeHandler(bundle as any, {})

export default (req: any, res: any) => handler(req, res)
