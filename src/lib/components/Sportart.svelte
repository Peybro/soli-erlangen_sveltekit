<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';

	export let data: any;
	export let images: any;
</script>

<svelte:head>
	<title>{data.sport}</title>
	<meta name="description" content={data.info[0].toString()} />
</svelte:head>

<h2 class="heading">{data.sport}</h2>

<div class="alert alert-primary d-flex align-items-center" role="alert">
	<div class="row">
		<div class="col-1">
			<i class="bi bi-alarm" />
		</div>
		<div class="col">
			{#each data.times as time}
				<p>{time}</p>
			{/each}
		</div>
	</div>
</div>

<h3>{data.subheading}</h3>

<Carousel {images} />

{#each data.info as item}
	{#if typeof item === 'string'}
		<p>{item}</p>
	{:else}
		<h4>{item.subitem}</h4>
		{#each item.text as text}
			<p>{text}</p>
		{/each}
	{/if}
{/each}
