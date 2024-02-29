
import { z } from "zod";
 
export const dakType = ["plat", "schuin", "kas"] as const;
export const aansluitingType = ["klein", "middel", "groot"] as const;
export const themes = ["light", "dark"] as const;
export const languages = ["en", "es", "fr"] as const;
export const allergies = ["peanuts", "dairy", "gluten", "soy", "shellfish"] as const;
//YRS: Hieronder probeer ik de daktype als select dropdown op te zetten...

 
export const schema = z.object({
	dakType: z.enum(dakType).default("plat"),
	aansluitingType: z.enum(aansluitingType).default("klein"),
	firstName: z.string().min(1),
	email: z.string().email("Please enter a valid email."),
	bio: z.string().optional(),
	theme: z.enum(themes).default("light"),
	language: z.enum(languages).default("en"),
	marketingEmails: z.boolean().default(true),
	allergies: z.array(z.enum(allergies)),
	roofSize: z.number().min(2500, "Minimaal 2500 m2").optional(),
	});

// YRS: Hieronder staat de originele code van de schema.ts file. Deze code is vervangen door de code die hierboven staat. De originele code is niet verwijderd, maar gecommentarieerd. De reden hiervoor is dat de originele code niet werkt. De code die hieronder staat is de juiste code die wel werkt.
// import { z } from 'zod';

// export const schema = z.object({
// 	firstName: z.string().min(1),
// 	lastName: z.string().min(1),
// 	email: z.string().email()
// });
