import { error, success } from "@/constants";

export async function handleMessage(
	request: Request,
	env: Env,
	ctx: ExecutionContext,
): Promise<Response> {
	if (
		request.headers.get("X-Telegram-Bot-Api-Secret-Token") !== env.BOT_API_TOKEN
	) {
		return new Response(error(403));
	}

	const message = await request.json();
	console.log(message);

	return new Response(success());
}
