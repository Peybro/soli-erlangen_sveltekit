<script lang="ts">
	import { getDownloadURL } from 'firebase/storage';
	export let data;
</script>

<h2 class="heading">Zeitung</h2>

{#await data.files}
	<div class="alert alert-info" role="alert">Lade PDF Dateien...</div>
{:then res}
	<div class="accordion">
		<div class="accordion-item">
			{#await getDownloadURL([...res.items].reverse()[0])}
				<div class="alert alert-info" role="alert">Lade aktuelle Ausgabe...</div>
			{:then url}
				<h2 class="accordion-header" id="panelsStayOpen-headingOne">
					<button
						class="accordion-button"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#panelsStayOpen-collapseOne"
					>
						Aktuelle Ausgabe:
						<span class="fw-bold"
							>{url.split('%2F')[1].split('?')[0].split('.')[1].startsWith('1.pdf')
								? 'Frühling-Herbst'
								: 'Herbst ' +
								  url.split('_')[2] +
								  '-Frühling' +
								  ' ' +
								  (parseInt(url.split('_')[2]) + 1)}</span
						>
					</button>
				</h2>
				<div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
					<div class="accordion-body">
						<iframe
							src={url}
							title={url.split('%2F')[1].split('?')[0].split('.')[0].toString()}
							height="600px"
							loading="lazy"
						/>
					</div>
				</div>
			{/await}
		</div>

		<div class="accordion-item">
			<h2 class="accordion-header" id="panelsStayOpen-headingTwo">
				<button
					class="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#panelsStayOpen-collapseTwo"
				>
					Ältere Ausgaben:
				</button>
			</h2>
			<div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
				<div class="accordion-body">
					<div class="grid">
						{#each [...res.items].reverse() as itemRef}
							{#await getDownloadURL(itemRef)}
								<div class="alert alert-info" role="alert">Lade ältere Ausgaben...</div>
							{:then url}
								<div>
									<h4>
										{url.split('_')[3].startsWith('1.pdf')
											? 'Frühling-Herbst ' + url.split('_')[2]
											: 'Herbst ' +
											  url.split('_')[2] +
											  '-Frühling' +
											  ' ' +
											  (parseInt(url.split('_')[2]) + 1)}
									</h4>
									<iframe
										src={url}
										title={url.split('%2F')[1].split('?')[0].split('.')[0].toString()}
										height="400px"
										loading="lazy"
									/>
									<a href={url}>Größer anzeigen</a>
								</div>
							{/await}
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
{:catch error}
	<div class="alert alert-danger" role="alert">
		{error.message}
	</div>
{/await}

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;
	}

	@media screen and (max-width: 600px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}

	iframe {
		width: 100%;
	}
</style>
