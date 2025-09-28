import { error, success } from "@/constants"
import { Update } from "@/types"

export async function handleMessage(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  if (request.headers.get("X-Telegram-Bot-Api-Secret-Token") !== env.SECRET_BOT_TOKEN) {
    return new Response(error(403))
  }

  const message: Update = await request.json()
  console.log(message)

  return new Response(success())
}
