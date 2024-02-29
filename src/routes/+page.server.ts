//YRS: Deze code hieronder is een combinatie van de +page.server.ts code van Stackblitz demo en de code van Formsnap. De code van Formsnap is aangepast, omdat $types niet werd geimporteerd. De code van Stackblitz demo is aangepast, omdat de code van Formsnap een andere structuur heeft.

import type { PageServerLoad } from "./$types";
import { schema } from "./schema";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
 
export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(schema)),
	};
};

//YRS: De coded die hieronder wordt gebruikt is de originele +page.server.ts code. Check of deze werkt met de gegeven code snippets van Formsnap (dan kan je deze originele +page.server.ts onveranderd laten) 
//Let op: Deze code werkte niet helemaal, omdat $types niet werd geimporteerd, ik heb daarom deze originele code aangepast en gecombineerd met de +page.server.ts code snippet op Formsnap. Zie de code hierboven.
// import { superValidate, message } from 'sveltekit-superforms';
// import { zod } from 'sveltekit-superforms/adapters';
// import { fail } from '@sveltejs/kit';
// import { schema } from './schema.js';

// export const load = async () => {
// 	const form = await superValidate(zod(schema));
// 	return { form };
// };

// export const actions = {
// 	default: async ({ request }) => {
// 		const form = await superValidate(request, zod(schema));
// 		console.log(form);

// 		if (!form.valid) return fail(400, { form });

// 		return message(form, 'Form posted successfully!');
// 	}
// };