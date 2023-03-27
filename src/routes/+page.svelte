<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import Location from '$lib/components/Location.svelte';
	import Trainer from '$lib/components/Trainer.svelte';

	export let data;
</script>

<div class="row">
	<div class="col">
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
