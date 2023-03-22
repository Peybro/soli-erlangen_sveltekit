<script lang="ts">
	import { page } from '$app/stores';
	import Location from '$lib/Location.svelte';
	import Trainer from '$lib/Trainer.svelte';

	export let data;
</script>

<div class="row">
	<div class="col">
		<slot />
	</div>
	<div class="col-lg-3 col-md-4 col-sm-12">
		<h2 class="heading">Kontakt:</h2>
		<Trainer open={$page.url.pathname.split('/').slice(-1).toString()} />
	</div>
</div>

<Location showTanzen={$page.url.pathname.includes('tanzen')} openMaps={data.mapSelection} />
