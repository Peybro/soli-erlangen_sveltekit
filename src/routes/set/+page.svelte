<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';

	export let data: PageData;

	// Client API:
	const { form, errors, constraints, enhance, delayed } = superForm(data.form);
</script>

<div class={`alert bg-${$form.bgColor}`} role="alert">
	<h4 class="alert-heading">{$form.title}</h4>
	<p>{$form.description}</p>
</div>

<form method="POST" use:enhance>
	<div class="form-checkbox">
		<input
			class=""
			id="enabledCheckBox"
			type="checkbox"
			name="enabled"
			bind:checked={$form.enabled}
		/>
		<label class="" for="enabledCheckBox">Anzeigen?</label>
	</div>

	<div class="form-input">
		<label for="titleInput" class="input-label">Überschrift</label>
		<input
			id="titleInput"
			type="text"
			class=""
			placeholder="Titel"
			name="title"
			data-invalid={$errors.title}
			bind:value={$form.title}
			{...$constraints.title}
		/>
		<!-- {#if $errors.title}
				<small class="invalid">{$errors.title}</small>
			{/if} -->
	</div>
	<div class="form-input">
		<label for="descriptionInput" class="">Beschreibung</label>
		<textarea
			id="descriptionInput"
			class=""
			placeholder="Beschreibung"
			name="description"
			rows="4"
			bind:value={$form.description}
		/>
	</div>

	<div class="form-input">
		<label for="bgColorSelect" class="">Hintergrundfarbe</label>
		<select id="bgColorSelect" class="" name="bgColor" bind:value={$form.bgColor}>
			<option value="success">Grün</option>
			<option value="warning">Gelb</option>
			<option value="danger">Rot</option>
			<option value="primary">Blau</option>
		</select>
	</div>

	<div class="form-input">
		<label for="passwordInput" class="">Passwort</label>
		<input
			id="passwordInput"
			type="password"
			class=""
			name="password"
			data-invalid={$errors.password}
			bind:value={$form.password}
			{...$constraints.password}
		/>
		{#if $errors.password}
			<small class="invalid">{$errors.password}</small>
		{/if}
	</div>
	<button class="" type="submit">Speichern</button>
	{#if $delayed}Working...{/if}
</form>

<style lang="scss">
	form {
		margin: 1rem;
		height: 100%;
		background: #f1f1f1;
		padding: 2rem;
		border-radius: 10px;

		.form-checkbox {
			text-align: right;
		}

		.form-input {
			display: flex;
			flex-direction: column;
			margin-bottom: 1rem;

			input,
			textarea,
			select {
				padding: 0.5rem;
				border-radius: 5px;
				border: 0.5px solid #ccc;
				background-color: white;
			}

			label {
			}
		}

		button[type='submit'] {
			display: block;
			width: 100%;
			height: 50px;
			border: none;
			background-image: linear-gradient(120deg, #3498db, #8e44ad);
			background-size: 200%;
			color: #fff;
			outline: none;
			cursor: pointer;
			transition: 0.5s;
			border-radius: 10px;

			&:hover {
				background-position: right;
			}
		}

		.invalid {
			color: red;
			margin-top: 0.3rem;
		}
	}

	.banner {
		padding: 1rem;
		margin: 1rem;
		border-radius: 0.5rem;

		&.bg-success {
			background-color: #d1e7dd;
			color: #0f5152;
		}

		&.bg-warning {
			background-color: #fff3cd;
			color: #664d37;
		}

		&.bg-danger {
			background-color: #f8d7da;
			color: #842029;
		}

		&.bg-primary {
			background-color: #cfe2ff;
			color: #084298;
		}
	}
</style>
