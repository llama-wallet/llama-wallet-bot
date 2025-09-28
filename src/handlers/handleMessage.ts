import { error, success } from "@/constants"
import { Update } from "@/types"

const START_COMMAND = "/start"
const CREATE_COMMAND = "/create"

export async function handleMessage(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  if (request.headers.get("X-Telegram-Bot-Api-Secret-Token") !== env.SECRET_BOT_TOKEN) {
    return new Response(error(403))
  }

  const message: Update = await request.json()

  const text = message.message?.text
  if (!text) new Response(success())

  switch (text) {
    case START_COMMAND:
    case CREATE_COMMAND:
    default:
      return new Response(success())
  }
}
