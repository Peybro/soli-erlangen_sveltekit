<script lang="ts">
	export let data;
</script>

<h2 class="heading">Einstellungen</h2>

<ul>
	<li>
		<a href="/set">Banner einstellen</a>
	</li>
	<li>
		<a href="https://soli-erlangen.de/spiel/" target="_blank">Spielberichtsbogen</a>
	</li>
</ul>

<form method="post" class="border p-2">
	<div class="alert alert-warning d-flex flex-column" role="alert">
		<img
			id="cookies"
			src="https://www.pngall.com/wp-content/uploads/2016/07/Cookie-PNG-File.png"
			alt="Kekse"
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

	<div class="form-check">
		<input
			class="form-check-input"
			type="radio"
			name="mapSelection"
			id="flexRadioDefault1"
			checked={data.openMaps === '1'}
			value="1"
		/>
		<label class="form-check-label" for="flexRadioDefault1"> OpenStreet Maps </label>
	</div>
	<div class="form-check">
		<input
			class="form-check-input"
			type="radio"
			name="mapSelection"
			id="flexRadioDefault2"
			checked={data.openMaps === '0'}
			value="0"
		/>
		<label class="form-check-label" for="flexRadioDefault2"> Google Maps </label>
	</div>

	<button type="submit" class="btn btn-primary">Speichern</button>
</form>

<style>
	img#cookies {
		width: 200px;
	}
</style>
