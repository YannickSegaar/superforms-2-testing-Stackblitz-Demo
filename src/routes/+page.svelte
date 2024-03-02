<script lang="ts">
	import type { PageData } from "./$types";
	import ProfileForm from "./profile-form.svelte";
	import { Separator } from "@/registry/new-york/ui/separator";
	export let data: PageData;
</script>

<div class="space-y-6">
	<div>
		<h3 class="text-lg font-medium">Profile</h3>
		<p class="text-sm text-muted-foreground">This is how others will see you on the site.</p>
	</div>
	<Separator />
	<ProfileForm data={data.form} />
</div>

<!-- YRS: Hieronder staat de +page.svelte code afkomstig van shadcn-svelte docs -->

<!-- <script lang="ts">
    import type { PageData } from "./$types";
    import SettingsForm from "./settings-form.svelte";
    import { SuperValidated, Infer, FormSchema } from 'sveltekit-superforms';
    
    export let data: PageData & { form: SuperValidated<Infer<FormSchema>, {username: string }> };

    // Initialize data.form if it doesn't exist or doesn't match the expected type
    if (!data.form || typeof data.form.username !== 'string') {
        data.form = {
            username: 'default_username', // Replace with actual username
            // Add other properties as needed
        };
    }
</script>
   
<SettingsForm {data.form} /> -->


<!-- YRS: Hieronder staat de code van de +page.svelte file van branch version_2. Deze code is vervangen door de code die hierboven staat. 

<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import {
		Field,
		Control,
		Label,
		Description,
		FieldErrors,
		Fieldset,
		Legend,
	} from "formsnap";
	import { zodClient } from "sveltekit-superforms/adapters";
	import type { PageData } from "./$types";
	import { allergies, schema, themes } from "./schema.js";
	import SuperDebug from "sveltekit-superforms";
	export let data: PageData;
 
	const form = superForm(data.form, {
		validators: zodClient(schema),
	});
	const { form: formData, enhance } = form;

</script>
 
Start of the form
<form use:enhance class="mx-auto flex max-w-md flex-col" method="POST">

	<Field {form} name="roofSize">
		<Control let:attrs>
			<Label>Dakoppervlak</Label>
			<input {...attrs} type="roofSize" bind:value={$formData.roofSize} />
		</Control>
    <Description>Wat is uw dakoppervlak?</Description>
		<FieldErrors />
	</Field>

  <Field {form} name="dakType">
		<Control let:attrs>
			<Label>Daktype</Label>
			<select {...attrs} bind:value={$formData.dakType}>
				<option value="plat">Plat</option>
				<option value="schuin">Schuin</option>
				<option value="kas">Kas</option>
			</select>
		</Control>
		<Description>Welk type dak heeft u?</Description>
		<FieldErrors />
	</Field>

  <Field {form} name="aansluitingType">
		<Control let:attrs>
			<Label>Type Aansluiting</Label>
			<select {...attrs} bind:value={$formData.aansluitingType}>
				<option value="klein">Klein</option>
				<option value="middel">630 KVA</option>
				<option value="groot">Groot</option>
			</select>
		</Control>
		<Description>Help us address you properly.</Description>
		<FieldErrors />
	</Field>

  <Field {form} name="firstName">
		<Control let:attrs>
			<Label>Naamgegevens</Label>
			<input {...attrs} type="firstName" bind:value={$formData.firstName} />
		</Control>
    <Description>Met wie hebben we het genoegen?</Description>
		<FieldErrors />
	</Field>

	<Field {form} name="email">
		<Control let:attrs>
			<Label>Email</Label>
			<input {...attrs} type="email" bind:value={$formData.email} />
		</Control>
		<Description>Company email is preferred</Description>
		<FieldErrors />
	</Field>

	<Field {form} name="bio">
		<Control let:attrs>
			<Label>Bio</Label>
			<textarea {...attrs} bind:value={$formData.bio} />
		</Control>
		<Description>Tell us a bit about yourself.</Description>
		<FieldErrors />
	</Field>

	<Field {form} name="language">
		<Control let:attrs>
			<Label>Language</Label>
			<select {...attrs} bind:value={$formData.language}>
				<option value="fr">French</option>
				<option value="es">Spanish</option>
				<option value="en">English</option>
			</select>
		</Control>
		<Description>Help us address you properly.</Description>
		<FieldErrors />
	</Field>

	<Fieldset {form} name="theme">
		<Legend>Select your theme</Legend>
		{#each themes as theme}
			<Control let:attrs>
				<Label>{theme}</Label>
				<input {...attrs} type="radio" value={theme} bind:group={$formData.theme} />
			</Control>
		{/each}
		<Description>We prefer dark mode, but the choice is yours.</Description>
		<FieldErrors />
	</Fieldset>
	<Field {form} name="marketingEmails">
		<Control let:attrs>
			<input {...attrs} type="checkbox" bind:checked={$formData.marketingEmails} />
			<Label>I want to receive marketing emails</Label>
		</Control>
		<Description>Stay up to date with our latest news and offers.</Description>
		<FieldErrors />
	</Field>
	<Fieldset {form} name="allergies">
		<Legend>Food allergies</Legend>
		{#each allergies as allergy}
			<Control let:attrs>
				<input
					{...attrs}
					type="checkbox"
					bind:group={$formData.allergies}
					value={allergy}
				/>
				<Label>{allergy}</Label>
			</Control>
		{/each}
		<Description>When we provide lunch, we'll accommodate your needs.</Description>
		<FieldErrors />
	</Fieldset>
	<button>Submit</button>
</form>
<SuperDebug data={$formData} />
End of the form -->