<script>
	import { kunstradImages } from '$lib/services/imageService';
	import Sportart from '$lib/Sportart.svelte';

	export let data;
</script>

<Sportart {data} images={kunstradImages} />
