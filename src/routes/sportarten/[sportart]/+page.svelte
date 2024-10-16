<script lang="ts">
	import { listAll, ref, getDownloadURL } from 'firebase/storage';
	import { storage } from '$lib/services/firebase';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import { infos } from '$lib/infos.ts';

	export let data;
	export let form: { error: string; success: boolean; message: string };

	let showUploader = false;

	$: sportart = $page.params.sportart[0].toUpperCase() + $page.params.sportart.slice(1);
</script>

{#if form && form.error}
	<div class="alert alert-danger alert-dismissible fade show" role="alert">
		{form.error}
		<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" />
	</div>
{/if}
{#if form && form.success}
	<div class="alert alert-success alert-dismissible fade show" role="alert">
		{form.message}
		<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" />
	</div>
{/if}

<div class="row mb-4">
	<div class="col">
		<h2 class="heading">
			{sportart}
		</h2>

		<!-- <h5 class="heading">Wann?</h5> -->
		{#if infos.filter((s) => s.sport === sportart)[0].times.length > 1}
			<ul>
				{#each infos.filter((s) => s.sport === sportart)[0].times as time}
					<li><h5>{time}</h5></li>
				{/each}
			</ul>
		{:else}
			<h5>
				<!-- <span class="heading">Wann?</span>{" "} -->
				{infos.filter((s) => s.sport === sportart)[0].times[0]}
			</h5>
		{/if}
	</div>
	{#if data.user}
		<div class="col-4">
			<button class="btn btn-primary mb-2 float-end" on:click={() => (showUploader = !showUploader)}
				><i class="bi bi-file-earmark-plus" />Neue Bilder</button
			>
		</div>
	{/if}
</div>

{#if showUploader && data.user}
	<div class="card p-2 mb-3">
		<form action="?/uploadImages" method="POST" enctype="multipart/form-data" use:enhance>
			<input type="hidden" name="category" value={sportart} />
			<label class="form-label" for="formFile">Bild(er) auswählen</label>
			<input
				accept="image/png, image/jpeg"
				class="form-control"
				id="formFile"
				name="images"
				type="file"
				multiple
				required
			/>
			<button type="submit" class="special-btn mt-3">Hochladen</button>
		</form>
	</div>
{/if}

{#await listAll(ref(storage, `Bilder/${sportart}`))}
	<div class="alert alert-info" role="alert">
		<div class="d-flex justify-content-between">
			Bilder werden geladen...
			<div class="spinner-border" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
		</div>
	</div>
{:then images}
	{#if images.items.length > 0}
		<div id="carouselExampleIndicators" class="carousel slide">
			<div class="carousel-indicators">
				{#each images.items as _, i}
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to={i}
						class:active={i === 0}
					/>
				{/each}
			</div>
			<div class="carousel-inner">
				{#each images.items as image, i}
					{#await getDownloadURL(image)}
						<h2>Lade Bild...</h2>
					{:then url}
						<div class="carousel-item" class:active={i === 0} data-bs-interval="4000">
							{#if data.user}
								<form action="?/deleteImage" method="post" use:enhance>
									<input type="hidden" name="image" value={image} />
									<input type="hidden" name="category" value={sportart} />
									<button type="submit" class="btn-close" aria-label="Close" />
								</form>
							{/if}
							<img src={url} class="d-block w-100" alt={url} />
						</div>
					{/await}
				{/each}
			</div>
			<button
				class="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="prev"
			>
				<span class="carousel-control-prev-icon" />
				<span class="visually-hidden">Previous</span>
			</button>
			<button
				class="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="next"
			>
				<span class="carousel-control-next-icon" />
				<span class="visually-hidden">Next</span>
			</button>
		</div>
		<!-- {:else}
		<div class="alert alert-warning" role="alert">
			Es sind keine Bilder für {$page.params.sportart[0].toUpperCase() +
				$page.params.sportart.slice(1)} vorhanden.
		</div> -->
	{/if}
{:catch error}
	<div class="alert alert-danger" role="alert">
		<h4 class="alert-heading">Es ist ein Fehler aufgetreten.</h4>
		<p>{error.message}</p>
	</div>
{/await}

<h3>{infos.filter((s) => s.sport === sportart)[0].subheading}</h3>

{#each infos.filter((s) => s.sport === sportart)[0].info as item}
	{#if typeof item === 'string'}
		<p>{item}</p>
	{:else}
		<h4>{item.subitem}</h4>
		{#each item.text as text}
			<p>{text}</p>
		{/each}
	{/if}
{/each}

<style lang="scss">
	.carousel-item form {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 9999;
	}
</style>
