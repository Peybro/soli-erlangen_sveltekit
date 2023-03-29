<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;

	let mapsCopy = data.maps?.valueOf() ?? '1';
</script>

<h2 class="heading">Einstellungen</h2>

<ul>
	{#if data.loggedIn}
		<li>
			<a href="/banner">Banner einstellen</a>
		</li>
		<li>
			<a href="/verein/zeitung/neu">Neues Vereinsblatt</a>
		</li>
	{/if}
	<li>
		<a href="https://soli-erlangen.de/spiel/" target="_blank">Spielberichtsbogen</a>
	</li>
</ul>

<form action="?/saveCookie" class="border p-2" method="post" use:enhance>
	<div class="alert alert-warning d-flex flex-column" role="alert">
		<img
			alt="Kekse"
			id="cookies"
			src="https://www.pngall.com/wp-content/uploads/2016/07/Cookie-PNG-File.png"
		/>
		<div class="fw-bold">
			Das Speichern dieser Einstellung wird einen internen Cookie setzen damit sich die Seite an
			deine Einstellung erinnert!
		</div>
		<div>
			Wenn du Google Maps wählst, wird auch Google einen Cookie setzen. Wenn du das nicht möchtest,
			nutze OpenStreet Maps oder lösch den Cookie nach der Nutzung wieder.
		</div>
	</div>

	<div class="mx-2">
		<div class="form-check">
			<input
				checked={data.maps === '1'}
				class="form-check-input"
				id="flexRadioDefault1"
				name="mapSelection"
				on:change={() => (mapsCopy = '1')}
				type="radio"
				value="1"
			/>
			<label class="form-check-label" for="flexRadioDefault1"> OpenStreet Maps </label>
		</div>
		<div class="form-check">
			<input
				checked={data.maps === '0'}
				class="form-check-input"
				id="flexRadioDefault0"
				name="mapSelection"
				on:change={() => (mapsCopy = '0')}
				type="radio"
				value="0"
			/>
			<label class="form-check-label" for="flexRadioDefault0"> Google Maps </label>
			{#if mapsCopy === '0'}
				<small class="invalid">Wird einen Google-Cookie anlegen</small>
			{/if}
		</div>
		<div class="form-check">
			<input
				checked={data.maps === '2'}
				class="form-check-input"
				id="flexRadioDefault2"
				name="mapSelection"
				on:change={() => (mapsCopy = '2')}
				type="radio"
				value="2"
			/>
			<label class="form-check-label" for="flexRadioDefault2">
				Keine eingebettete Karte (nur Adresse)
			</label>
		</div>
	</div>

	<button class="btn btn-primary mt-2" type="submit">Speichern</button>
</form>

<style>
	img#cookies {
		width: 200px;
	}

	.invalid {
		color: red;
		margin-top: 0.3rem;
	}
</style>
