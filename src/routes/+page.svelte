<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import Location from '$lib/components/Location.svelte';
	import Trainer from '$lib/components/Trainer.svelte';

	export let data;

	/**
	 * Shuffles array
	 * @param {Array} a items An array containing the items.
	 */
	function shuffle(a: any[]) {
		const shuffled = a
			.map((value) => ({ value, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ value }) => value);

		return shuffled;
	}

	function formatArray(
		inArray: string[]
	): { src: string; alt: string; title: string; desc: string }[] {
		return inArray.map((item) => {
			return {
				src: item,
				alt: '',
				title: '',
				desc: ''
			};
		});
	}

	async function getBilder() {
		const response = await fetch('/api/bilder', {
			method: 'POST',
			headers: {
				'Content-Type': 'image/jpg'
			}
		});

		return await response.json();
	}
</script>

<div class="row">
	<div class="col">
		{#await getBilder()}
			<div class="alert alert-info" role="alert">
				<div class="d-flex justify-content-between">
					Lade Bilder...
					<div class="spinner-border" role="status">
						<span class="visually-hidden">Loading...</span>
					</div>
				</div>
			</div>
		{:then images}
			<Carousel images={shuffle(formatArray(images.flat()))} indicators={false} />
		{/await}

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
