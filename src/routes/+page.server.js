import { z } from "zod";
import { superValidate } from "sveltekit-superforms/server";

const schema = z.object({
	name: z.string().default("Hello world!"),
	datetime: z.string().datetime(),
});

export const load = async () => {
	// Server API:
	const form = await superValidate(schema);

	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, schema);
		console.log("POST", form);

		// Convenient validation check:
		if (!form.valid) {
			return fail(400, { form });
		}

		// TODO: Do something with the validated data

		return { form };
	},
};
