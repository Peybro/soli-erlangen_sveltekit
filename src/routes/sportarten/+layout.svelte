<script lang="ts">
	import { page } from '$app/stores';
	import Location from '$lib/components/Location.svelte';
	import Trainer from '$lib/components/Trainer.svelte';

	export let data;
</script>

<div class="row">
	<div class="col">
		{#if data.loggedIn}
			<a
				href="/bilder{$page.url.pathname.split('/').slice(-1).toString()}"
				class="btn btn-primary mb-4">Bilder bearbeiten</a
			>
		{/if}
		<slot />
	</div>
	<div class="col-lg-3 col-md-4 col-sm-12">
		<h2 class="heading">Kontakt:</h2>
		<Trainer open={$page.url.pathname.split('/').slice(-1).toString()} />
	</div>
</div>

<Location maps={data.maps || '1'} showTanzen={$page.url.pathname.includes('tanzen')} />
