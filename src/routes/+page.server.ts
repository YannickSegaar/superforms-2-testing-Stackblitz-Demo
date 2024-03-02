//YRS: Deze code hieronder is een code van de +page.server.ts code van shadcn-svelte docs. De vorige code staat nog in de version_2 branch en is hieronder geplaats.

import type { PageServerLoad } from "./$types";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { profileFormSchema } from "./profile-form.svelte";
import { fail, type Actions } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(profileFormSchema)),
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(profileFormSchema));
		if (!form.valid) {
			return fail(400, {
				form,
			});
		}
		return {
			form,
		};
	},
};

//YRS: Deze code hieronder is een code van de +page.server.ts code van version_2 branch.

// import type { PageServerLoad } from "./$types";
// import { superValidate } from "sveltekit-superforms";
// import { formSchema } from "./schema";
// import { zod } from "sveltekit-superforms/adapters";
 
// export const load: PageServerLoad = async () => {
//   return {
//     form: await superValidate(zod(formSchema)),
//   };
// };

// import type { PageServerLoad } from "./$types";
// import { schema } from "./schema";
// import { superValidate, message } from "sveltekit-superforms";
// import { zod } from "sveltekit-superforms/adapters";
// import { fail } from '@sveltejs/kit';

 
// export const load: PageServerLoad = async () => {
// 	return {
// 		form: await superValidate(zod(schema)),
// 	};
// };

// export const actions = {
// 	default: async ({ request }) => {
// 		const form = await superValidate(request, zod(schema));
// 		console.log(form);

// 		if (!form.valid) return fail(400, { form });

// 		return message(form, 'Form posted successfully!');
// 	}
// };


