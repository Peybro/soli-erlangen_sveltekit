<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';

	export let data: PageData;

	// Client API:
	const { form, errors, constraints, enhance, delayed } = superForm(data.form);
</script>

{#if data.loggedIn}
	<div class="alert alert-{$form.bgColor}" class:muted={!$form.enabled} role="alert">
		<h4 class="alert-heading">{$form.title}</h4>
		<p>{$form.description}</p>
	</div>

	<form method="POST" use:enhance>
		<div class="form-checkbox">
			<input
				bind:checked={$form.enabled}
				class=""
				id="enabledCheckBox"
				name="enabled"
				type="checkbox"
			/>
			<label class="" for="enabledCheckBox">Anzeigen?</label>
		</div>

		<div class="form-input">
			<label class="input-label" for="titleInput">Überschrift</label>
			<input
				{...$constraints.title}
				bind:value={$form.title}
				class=""
				data-invalid={$errors.title}
				id="titleInput"
				name="title"
				placeholder="Titel"
				type="text"
			/>
			<!-- {#if $errors.title}
                <small class="invalid">{$errors.title}</small>
            {/if} -->
		</div>
		<div class="form-input">
			<label class="" for="descriptionInput">Beschreibung</label>
			<textarea
				bind:value={$form.description}
				class=""
				id="descriptionInput"
				name="description"
				placeholder="Beschreibung"
				rows="4"
			/>
		</div>

		<div class="form-input">
			<label class="" for="bgColorSelect">Hintergrundfarbe</label>
			<select bind:value={$form.bgColor} class="" id="bgColorSelect" name="bgColor">
				<option value="success">Grün</option>
				<option value="warning">Gelb</option>
				<option value="danger">Rot</option>
				<option value="primary">Blau</option>
			</select>
		</div>

		<!-- <div class="form-input">
		<label class="" for="passwordInput">Passwort</label>
		<input
			{...$constraints.password}
			bind:value={$form.password}
			class=""
			data-invalid={$errors.password}
			id="passwordInput"
			name="password"
			type="password"
		/>
		{#if $errors.password}
			<small class="invalid">{$errors.password}</small>
		{/if}
	</div> -->
		<button class="" type="submit"
			>Speichern
			{#if $delayed}...{/if}
		</button>
	</form>
{:else}
	<div class="alert alert-warning" role="alert">
		<div>Bitte erst <a href="/login">einloggen</a></div>
	</div>
{/if}

<style lang="scss">
	.muted {
		opacity: 0.6;
		filter: grayscale(100%);
	}

	form {
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
</style>
