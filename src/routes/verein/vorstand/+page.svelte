<script lang="ts">
	import Vorstand from '$lib/Vorstand.svelte';
	import Trainer from '$lib/Trainer.svelte';
</script>

<!-- <h2 class="heading">Vorstand und Trainer</h2> -->

<div class="row row-cols-1 row-cols-md-2">
	<div class="col my-2">
		<h3 class="heading">Vorstand:</h3>
		<Vorstand />
	</div>
	<div class="col my-2">
		<h3 class="heading">Trainer:</h3>
		<Trainer />
	</div>
</div>
