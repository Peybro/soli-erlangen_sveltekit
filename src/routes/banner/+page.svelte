<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import LoginFirst from '$lib/components/LoginFirst.svelte';

	export let data;

	// Client API:
	const { form, errors, constraints, enhance, delayed } = superForm(data.form);
</script>

{#if data.user}
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
			<label class="form-label" for="enabledCheckBox">Anzeigen?</label>
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
			<label class="form-label" for="descriptionInput">Beschreibung</label>
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
			<label class="form-label" for="bgColorSelect">Hintergrundfarbe</label>
			<select bind:value={$form.bgColor} class="" id="bgColorSelect" name="bgColor">
				<option value="success">Grün</option>
				<option value="warning">Gelb</option>
				<option value="danger">Rot</option>
				<option value="primary">Blau</option>
			</select>
		</div>

		<button class="special-btn" type="submit"
			>Speichern
			{#if $delayed}...{/if}
		</button>
	</form>
{:else}
	<LoginFirst />
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
	}
</style>
