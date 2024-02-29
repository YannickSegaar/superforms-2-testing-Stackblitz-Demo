import { z } from "zod";
 
export const themes = ["light", "dark"] as const;
export const languages = ["en", "es", "fr"] as const;
export const allergies = ["peanuts", "dairy", "gluten", "soy", "shellfish"] as const;
 
export const schema = z.object({
	email: z.string().email("Please enter a valid email."),
	bio: z.string().optional(),
	theme: z.enum(themes).default("light"),
	language: z.enum(languages).default("en"),
	marketingEmails: z.boolean().default(true),
	allergies: z.array(z.enum(allergies)),
});

// YRS: Hieronder staat de originele code van de schema.ts file. Deze code is vervangen door de code die hierboven staat. De originele code is niet verwijderd, maar gecommentarieerd. De reden hiervoor is dat de originele code niet werkt. De code die hieronder staat is de juiste code die wel werkt.
// import { z } from 'zod';

// export const schema = z.object({
// 	firstName: z.string().min(1),
// 	lastName: z.string().min(1),
// 	email: z.string().email()
// });
