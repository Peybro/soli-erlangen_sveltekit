<script lang="ts">
	export let images: { src: string; alt: string; title: string; desc: string }[];
	export let controls = true;
	export let indicators = true;
	export let text = true;
</script>

<div class="carousel slide" data-bs-ride="carousel" id="carouselExampleCaptions">
	{#if indicators}
		<div class="carousel-indicators">
			{#each images as _, i}
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to={i}
					class:active={i === 0}
				/>
			{/each}
		</div>
	{/if}
	<div class="carousel-inner">
		{#each images as img, i}
			<div class="carousel-item" class:active={i === 0} data-bs-interval="4000">
				<img src={img.src} class="d-block w-100" alt={img.alt} />
				{#if text}
					<div class="carousel-caption d-none d-md-block">
						<h5>{img.title}</h5>
						<p>{img.desc}</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>
	{#if controls}
		<button
			class="carousel-control-prev"
			type="button"
			data-bs-target="#carouselExampleCaptions"
			data-bs-slide="prev"
		>
			<span class="carousel-control-prev-icon" aria-hidden="true" />
			<span class="visually-hidden">Previous</span>
		</button>
		<button
			class="carousel-control-next"
			type="button"
			data-bs-target="#carouselExampleCaptions"
			data-bs-slide="next"
		>
			<span class="carousel-control-next-icon" aria-hidden="true" />
			<span class="visually-hidden">Next</span>
		</button>
	{/if}
</div>

<style>
	/* .carousel-item {
        height: 600px;
    } */
</style>
