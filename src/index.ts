import { error } from "@/constants";
import { handleMessage } from "./handlers";

const webhookListener = "/endpoint";

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url: URL = new URL(request.url);

		if (url.pathname === webhookListener) {
			return handleMessage(request, env, ctx);
		}

		return new Response(error(404));
	},
} satisfies ExportedHandler<Env>;
