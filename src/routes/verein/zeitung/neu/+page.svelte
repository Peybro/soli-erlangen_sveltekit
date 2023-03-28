<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import { enhance } from '$app/forms';

	export let data: PageData;
	export let form: ActionData;

	let newsPaperName = '';
	let seasonFrom: number;
	let seasonTo: number;
	let yearFrom: number;
	let yearTo: number;

	$: {
		const yearRegex = /20\d\d/;
		const result = yearRegex.exec(newsPaperName);
		if (newsPaperName !== undefined && result !== undefined && result !== null)
			yearFrom = parseInt(result[0]);
	}
	$: {
		const seasonRegex = /20\d\d_\d/;
		const result = seasonRegex.exec(newsPaperName);
		if (newsPaperName !== undefined && result !== undefined && result !== null) {
			seasonFrom = parseInt(result[0].split('_')[1]);
		}
	}
	$: yearTo = seasonFrom === 2 ? yearFrom + 1 : yearFrom;
	$: seasonTo = seasonFrom === 1 ? 2 : 1;
</script>

<h2 class="heading">Neues Vereinsblatt hochladen</h2>

{#if form && form.error}
	<div class="alert alert-danger alert-dismissible fade show" role="alert">
		{form.error}
		<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" />
	</div>
{/if}
{#if form && form.success}
	<div class="alert alert-success alert-dismissible fade show" role="alert">
		Zeitung erfolgreich hochgeladen. Sie sollte jetzt unter <a href="/verein/zeitung"
			>"Vereinsblätter"</a
		>
		zu finden sein.
		<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" />
	</div>
{/if}

<form method="POST" action="?/uploadPDF" enctype="multipart/form-data" use:enhance>
	<label class="form-label" for="formFile">Neue Zeitung hochladen</label>
	<input
		accept=".pdf"
		class="form-control"
		id="formFile"
		name="path"
		type="file"
		bind:value={newsPaperName}
		required
	/>

	<div class="p-2 my-2 form-card">
		<div class="row">
			<div class="col-1">
				<span class="from-to">Von</span>
			</div>

			<div class="col">
				<label for="seasonFrom">Jahreszeit</label>
				<select class="form-select" id="seasonFrom" name="seasonFrom" bind:value={seasonFrom}>
					<option disabled value={0}>auswählen</option>
					<option value={1}>Frühling</option>
					<option value={2}>Herbst</option>
				</select>
			</div>
			<div class="col">
				<label for="yearFrom">Jahr</label>
				<input
					class="form-control"
					id="yearFrom"
					inputmode="numeric"
					min={new Date().getFullYear()}
					name="yearFrom"
					type="number"
					bind:value={yearFrom}
					required
				/>
			</div>
		</div>
	</div>

	<div class="p-2 my-2 form-card">
		<div class="row">
			<div class="col-1">
				<span class="from-to">Bis</span>
			</div>

			<div class="col">
				<label for="seasonTo">Jahreszeit</label>
				<select class="form-select" id="seasonTo" name="seasonTo" bind:value={seasonTo}>
					<option disabled value={0}>auswählen</option>
					<option value={1}>Frühling</option>
					<option value={2}>Herbst</option>
				</select>
			</div>
			<div class="col">
				<label for="yearTo">Jahr</label>
				<input
					class="form-control"
					id="yearTo"
					inputmode="numeric"
					min={new Date().getFullYear()}
					name="yearTo"
					type="number"
					bind:value={yearTo}
					required
				/>
			</div>
		</div>
	</div>

	<div class="form-input">
		<label class="form-label" for="password">Passwort</label>
		<input
			class="form-control"
			id="password"
			name="password"
			placeholder="Passwort"
			type="password"
			required
		/>
	</div>

	<button class="btn btn-primary my-3" type="submit">Hochladen</button>
</form>

<style lang="scss">
	form {
		height: 100%;
		background: #f1f1f1;
		padding: 2rem;
		border-radius: 10px;

		.form-card {
			// background: #cecece;
			border: 1px solid #cecece;
			border-radius: 10px;
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
	}
</style>
