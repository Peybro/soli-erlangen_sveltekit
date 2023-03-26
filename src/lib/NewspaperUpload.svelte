<script lang="ts">
	import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
	import { ref, uploadBytes } from 'firebase/storage';
	import { storage } from '$lib/services/firebase';

	let newsPaperName = '';

	let seasonFrom: number;
	let seasonTo: number;
	let yearFrom: number;
	let yearTo: number;
	let password = '';

	let loading = false;
	let success = false;
	let uploadError = false;
	let errorMessage = '';

	function handleSeasonFromChange() {
		seasonTo = seasonFrom === 1 ? 2 : 1;
		yearTo = seasonFrom === 2 ? yearFrom + 1 : yearFrom;
	}

	function handleSeasonToChange() {
		seasonFrom = seasonTo === 1 ? 2 : 1;
		yearTo = seasonFrom === 2 ? yearFrom + 1 : yearFrom;
	}

	function handleYearFromChange() {
		yearTo = seasonFrom === 2 ? yearFrom + 1 : yearFrom;
	}

	function handleYearToChange() {
		yearFrom = seasonFrom === 2 ? yearTo - 1 : yearTo;
	}

	$: yearTo = seasonFrom === 2 ? yearFrom + 1 : yearFrom;

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

	$: seasonTo = seasonFrom === 1 ? 2 : 1;

	async function uploadPDF(event: any) {
		event.preventDefault();

		uploadError = false;
		loading = true;

		let file = event.target[0].files[0];
		const uploadRef = ref(storage, `Vereinsblatt/soli_info_${yearFrom}_${seasonFrom}.pdf`);
		const auth = getAuth();

		await signInWithEmailAndPassword(auth, 'vorstand@soli-erlangen.de', password || '')
			.then(async (userCredential) => {
				//? Signed in
				// const user = userCredential.user;
				// console.log(user);

				await uploadBytes(uploadRef, file)
					.then((snapshot) => {
						// console.log('Uploaded a blob or file!');
						loading = false;
						success = true;
						setTimeout(() => {
							success = false;
							newsPaperName = '';
							password = '';
						}, 5000);
					})
					.catch((error) => {
						// console.log(error);
						loading = false;
						errorMessage = error.message;
						uploadError = true;
						setTimeout(() => {
							uploadError = false;
						}, 10000);
					});
			})
			.catch((error) => {
				loading = false;
				errorMessage = error.message;
				uploadError = true;
				setTimeout(() => {
					uploadError = false;
				}, 10000);
			});
	}
</script>

{#if loading}
	<div class="alert alert-info" role="alert">
		<div class="d-flex align-items-center">
			<span>Hochladen...</span>
			<div class="spinner-border ms-auto" role="status" aria-hidden="true" />
		</div>
	</div>
{/if}
{#if uploadError}
	<div class="alert alert-danger" role="alert">{errorMessage}</div>
{/if}
{#if success}
	<div class="alert alert-success" role="alert">Upload erfolgreich!</div>
{/if}

<div class="card p-3">
	<form enctype="multipart/form-data" on:submit={(e) => uploadPDF(e)}>
		<label for="formFile" class="form-label">Neue Zeitung hochladen</label>
		<input
			class="form-control"
			type="file"
			accept=".pdf"
			id="formFile"
			name="path"
			bind:value={newsPaperName}
		/>

		<div class="p-2 my-2 card">
			<div class="row">
				<div class="col-1">
					<span class="from-to">Von</span>
				</div>

				<div class="col">
					<label for="seasonFrom">Jahreszeit</label>
					<select
						class="form-select"
						id="seasonFrom"
						name="seasonFrom"
						bind:value={seasonFrom}
						on:change={handleSeasonFromChange}
					>
						<option value={0} disabled>auswählen</option>
						<option value={1}>Frühling</option>
						<option value={2}>Herbst</option>
					</select>
				</div>
				<div class="col">
					<label for="yearFrom">Jahr</label>
					<input
						class="form-control"
						type="number"
						inputmode="numeric"
						min={new Date().getFullYear()}
						id="yearFrom"
						name="yearFrom"
						bind:value={yearFrom}
						on:change={handleYearFromChange}
					/>
				</div>
			</div>
		</div>

		<div class="p-2 my-2 card">
			<div class="row">
				<div class="col-1">
					<span class="from-to">Bis</span>
				</div>

				<div class="col">
					<label for="seasonTo">Jahreszeit</label>
					<select
						class="form-select"
						id="seasonTo"
						name="seasonTo"
						bind:value={seasonTo}
						on:change={handleSeasonToChange}
					>
						<option value={0} disabled>auswählen</option>
						<option value={1}>Frühling</option>
						<option value={2}>Herbst</option>
					</select>
				</div>
				<div class="col">
					<label for="yearTo">Jahr</label>
					<input
						class="form-control"
						type="number"
						inputmode="numeric"
						min={new Date().getFullYear()}
						id="yearTo"
						name="yearTo"
						bind:value={yearTo}
						on:change={handleYearToChange}
					/>
				</div>
			</div>
		</div>

		<div class="form-input">
			<label for="password" class="form-label">Passwort</label>
			<input
				class="form-control"
				type="password"
				id="password"
				name="password"
				placeholder="Passwort"
				bind:value={password}
			/>
		</div>

		<button
			type="submit"
			class="btn btn-primary my-3"
			disabled={!(
				newsPaperName.length > 0 &&
				newsPaperName.endsWith('.pdf') &&
				password.length > 0 &&
				yearTo !== undefined &&
				yearFrom !== undefined &&
				yearTo - yearFrom <= 1
			)}>Hochladen</button
		>
	</form>
</div>
