<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import { enhance } from '$app/forms';

	export let data: PageData;
	export let form: ActionData;

	// $: {
	// 	const yearRegex = /20\d\d/;
	// 	const result = yearRegex.exec(newsPaperName);
	// 	if (newsPaperName !== undefined && result !== undefined && result !== null)
	// 		$form.yearFrom = parseInt(result[0]);
	// }
	// $: {
	// 	$form.yearTo = $form.seasonFrom === 2 ? $form.yearFrom + 1 : $form.yearFrom;
	// }

	// $: {
	// 	const infoRegex = /20\d\d_\d/;
	// 	const result = infoRegex.exec(newsPaperName);
	// 	if (newsPaperName !== undefined && result !== undefined && result !== null)
	// 		$form.seasonFrom = parseInt(result[0][result[0].length - 1]);
	// }
	// $: $form.seasonTo = $form.seasonFrom === 1 ? 2 : 1;

	// $: console.log(
	// 	`from: ${$form.seasonFrom} ${$form.yearFrom}, to: ${$form.seasonTo} ${$form.yearTo}`
	// );
</script>

<h2 class="heading">Dashboard</h2>

<form method="POST" action="?/uploadPDF" use:enhance>
	<label for="formFile" class="form-label">Neue Zeitung hochladen</label>
	<input class="form-control" type="file" accept=".pdf" id="formFile" name="path" />

	<div class="input-group my-3">
		<span class="input-group-text">von</span>
		<select class="form-select" name="seasonFrom">
			<option value={0} disabled>auswählen</option>
			<option value={1}>Frühling</option>
			<option value={2}>Herbst</option>
		</select>

		<input class="form-control" type="number" min={new Date().getFullYear()} name="yearFrom" />
	</div>

	<div class="input-group mb-3">
		<span class="input-group-text">bis</span>
		<select class="form-select" name="seasonTo">
			<option value={0} disabled>auswählen</option>
			<option value={1}>Frühling</option>
			<option value={2}>Herbst</option>
		</select>

		<input class="form-control" type="number" min={new Date().getFullYear()} name="yearTo" />
	</div>

	<div class="form-input">
		<label for="password" class="form-label">Passwort</label>
		<input class="form-control" type="password" id="password" name="password" />
		{#if form?.incorrect}
			<small class="invalid">{form?.message}</small>
		{/if}
	</div>

	<button type="submit" class="btn btn-primary my-3">Hochladen</button>
</form>

<style>
	.invalid {
		color: red;
	}
</style>
