<script lang="ts">
	typeof window !== `undefined` && import('bootstrap');

	import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';
	import Carousel from '$lib/Carousel.svelte';
	import Trainer from '$lib/Trainer.svelte';

	import { page } from '$app/stores';

	import {
		gymnastikImages,
		kindertanzenImages,
		kinderturnenImages,
		kunstradImages,
		radballImages,
		reigenImages
	} from '../lib/services/imageService';
</script>

<!-- <Carousel
	images={[
		...gymnastikImages,
		...kindertanzenImages,
		...kinderturnenImages,
		...kunstradImages,
		...radballImages,
		...reigenImages
	]}
	controls={false}
	indicators={false}
	text={false}
/> -->

<Navbar />

<div class="wrapper">
	<div class="container my-2">
		<main>
			<slot />
		</main>
	</div>

	<Footer />
</div>

<style global>
	@import './../../node_modules/bootstrap/dist/css/bootstrap.css';
	@import './../../node_modules/bootstrap-icons/font/bootstrap-icons.css';

	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,
	body {
		height: 100%;
	}

	.wrapper {
		display: grid;
		grid-template-rows: 1fr auto;
		min-height: 100%;
	}

	main {
		grid-row: 1;
	}

	.heading {
		text-decoration: underline;
		text-decoration-color: #198754;
	}
</style>
