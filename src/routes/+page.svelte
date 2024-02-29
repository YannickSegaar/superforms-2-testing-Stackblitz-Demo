
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
 
<form use:enhance class="mx-auto flex max-w-md flex-col" method="POST">
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


<!-- YRS: Hieronder staat de originele code van de +page.svelte file. Deze code is vervangen door de code die hierboven staat. De originele code is niet verwijderd, maar gecommentarieerd. De reden hiervoor is dat de originele code niet werkt. De code die hieronder staat is de juiste code die wel werkt.

<script lang="ts">
  import { page } from '$app/stores';
  import { superForm } from 'sveltekit-superforms';
  import SuperDebug from 'sveltekit-superforms'

  export let data;

  const { form, errors, message, constraints, enhance } = superForm(data.form);
</script>

<SuperDebug data={$form} />

<h3>Superforms testing ground - Zod</h3>

{#if $message}
  <div class="status"
    class:error={$page.status >= 400}
    class:success={$page.status == 200}
  >
    {$message}
  </div>
{/if}

<form method="POST" use:enhance>
  <label>
    First Name<br />
    <input
      name="firstName"
      aria-invalid={$errors.firstName ? 'true' : undefined}
      bind:value={$form.firstName}
    />
    {#if $errors.firstName}<span class="invalid">{$errors.firstName}</span>{/if}
  </label>

    <label>
      Last Name<br />
      <input
        name="lastName"
        aria-invalid={$errors.lastName ? 'true' : undefined}
        bind:value={$form.lastName}
      />
      {#if $errors.lastName}<span class="invalid">{$errors.lastName}</span>{/if}
    </label>

      <label>
        Email<br />
        <input
          name="email"
          type="email"
          aria-invalid={$errors.email ? 'true' : undefined}
          bind:value={$form.email}
        />
        {#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
      </label>

  <button>Submit</button>
</form>

<hr>
<p><a target="_blank" href="https://superforms.rocks/api">API Reference</a></p>

<style>
  .invalid {
    color: red;
  }

  .status {
    color: white;
    padding: 4px;
    padding-left: 8px;
    border-radius: 2px;
    font-weight: 500;
  }

  .status.success {
    background-color: seagreen;
  }

  .status.error {
    background-color: #ff2a02;
  }

  input {
    background-color: #ddd;
  }

  a {
    text-decoration: underline;
  }

  hr {
    margin-top: 4rem;
  }

  form {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
</style> -->