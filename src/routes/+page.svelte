<script lang="ts">
	import { listAll, ref, getDownloadURL } from 'firebase/storage';
	import { storage } from '$lib/services/firebase';
	import { page } from '$app/stores';

	import Carousel from '$lib/components/Carousel.svelte';
	import Location from '$lib/components/Location.svelte';
	import Trainer from '$lib/components/Trainer.svelte';

	export let data;
</script>

<div class="row">
	<div class="col">
		<!-- {#await listAll(ref(storage, `Bilder/`))}
			<div class="alert alert-info" role="alert">
				<div class="d-flex justify-content-between">
					Bilder werden geladen...
					<div class="spinner-border" role="status">
						<span class="visually-hidden">Loading...</span>
					</div>
				</div>
			</div>
		{:then images}
			{#each images.prefixes as folder}
				{#await listAll(ref(storage, `Bilder/${folder.toString().split('/').at(-1)}`))}
					<div class="alert alert-info" role="alert">
						<div class="d-flex justify-content-between">
							Bilder werden geladen...
							<div class="spinner-border" role="status">
								<span class="visually-hidden">Loading...</span>
							</div>
						</div>
					</div>
				{:then imagesinFolder}
					{#if imagesinFolder.items.length > 0}
						<div id="carouselExampleIndicators" class="carousel slide">
							<div class="carousel-indicators">
								{#each imagesinFolder.items as _, i}
									<button
										type="button"
										data-bs-target="#carouselExampleIndicators"
										data-bs-slide-to={i}
										class:active={i === 0}
									/>
								{/each}
							</div>
							<div class="carousel-inner">
								{#each imagesinFolder.items as imageInFolder, i}
									{#await getDownloadURL(imageInFolder)}
										<h2>Lade Bild...</h2>
									{:then url}
										<div class="carousel-item" class:active={i === 0} data-bs-interval="4000">
											<img src={url} class="d-block w-100" alt={url} />
										</div>
									{/await}
								{/each}
							</div>
							<button
								class="carousel-control-prev"
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide="prev"
							>
								<span class="carousel-control-prev-icon" />
								<span class="visually-hidden">Previous</span>
							</button>
							<button
								class="carousel-control-next"
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide="next"
							>
								<span class="carousel-control-next-icon" />
								<span class="visually-hidden">Next</span>
							</button>
						</div>
					{:else}
						<div class="alert alert-warning" role="alert">
							Es sind keine Bilder für {$page.params.sportart[0].toUpperCase() +
								$page.params.sportart.slice(1)} vorhanden.
						</div>
					{/if}
				{/await}
			{/each}
		{:catch error}
			<div class="alert alert-danger" role="alert">
				<h4 class="alert-heading">Es ist ein Fehler aufgetreten.</h4>
				<p>{error.message}</p>
			</div>
		{/await} -->

		<Carousel images={data.imageArray} />
		<div class="fs-6 mt-3">
			<p>
				<span class="fw-bold">Herzlich Willkommen auf der Website der Solidarität Erlangen!</span> Wir
				freuen uns, dass Du den Weg zu uns gefunden hast und laden dich ein, sich auf unserer Seite umzusehen.
			</p>

			<p>
				Unser Verein bietet Ihnen eine Vielzahl an Sport- und Freizeitmöglichkeiten für jedes Alter
				und jedes Niveau. Ob Sie nun ein begeisterter Radball-Spieler sind, sich für Kunstrad
				begeistern oder einfach nur gemeinsam mit anderen Kindern turnen oder tanzen möchten - bei
				uns sind Sie genau richtig.
			</p>

			<p>
				Auf unserer Website finden Sie alle Informationen zu unseren Angeboten, Trainingszeiten und
				Veranstaltungen. Wir legen großen Wert auf eine familiäre und freundliche Atmosphäre, in der
				sich jeder wohl fühlt und sein Bestes geben kann.
			</p>

			<p>
				Unsere erfahrenen Trainerinnen und Trainer stehen Ihnen gerne zur Seite und begleiten Sie
				auf Ihrem Weg zu einem fitteren und gesünderen Leben. Wir freuen uns darauf, Sie bald bei
				uns begrüßen zu dürfen und wünschen Ihnen viel Spaß beim Erkunden unserer Website.
			</p>

			<p class="fw-bold">Eure Soli Erlangen</p>
		</div>
	</div>
	<div class="col-lg-3 col-md-4 col-sm-12">
		<h2 class="heading">Kontakt:</h2>
		<Trainer />
	</div>

	<Location maps={data.mapSelection || '1'} />
</div>
