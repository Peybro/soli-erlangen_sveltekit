<script>
	import { kindertanzenImages } from '$lib/services/imageService';
	import Sportart from '$lib/components/Sportart.svelte';

	export let data;
</script>

<Sportart {data} images={kindertanzenImages} />
