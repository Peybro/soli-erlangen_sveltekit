<script lang="ts">
	export let showTanzen = false;
	export let maps: string;
</script>

<h2 class="heading mt-4">Hier findet ihr uns:</h2>

<ul class="nav nav-tabs">
	<li class="nav-item">
		<!-- svelte-ignore a11y-missing-attribute -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<a class="nav-link" class:active={showTanzen} on:click={() => (showTanzen = true)} role="button"
			>Kindertanzen</a
		>
	</li>
	<li class="nav-item">
		<!-- svelte-ignore a11y-missing-attribute -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<a
			class="nav-link"
			class:active={!showTanzen}
			on:click={() => (showTanzen = false)}
			role="button">Alles andere</a
		>
	</li>
</ul>

<div class="container mt-2">
	{#if showTanzen}
		{#if parseInt(maps) === 1}
			<iframe
				title="Kinderland Die Arche"
				height="450"
				frameborder="0"
				scrolling="no"
				marginheight="0"
				marginwidth="0"
				src="https://www.openstreetmap.org/export/embed.html?bbox=11.020459234714508%2C49.55173486467105%2C11.02493852376938%2C49.553311381684125&amp;layer=mapnik&amp;marker=49.55252312953809%2C11.022698879241943"
				style="border:0;width:100%"
			/>
			<br /><small
				><a
					href="https://www.openstreetmap.org/?mlat=49.55252&amp;mlon=11.02270#map=19/49.55252/11.02270"
					>Größere Karte anzeigen</a
				></small
			>
		{:else if parseInt(maps) === 0}
			<iframe
				title="Kinderland Die Arche"
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d647.0986005711217!2d11.02272!3d49.552581!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x519124d61e7f6904!2sKinderland%20%22Die%20Arche%22!5e0!3m2!1sde!2sde!4v1679155245137!5m2!1sde!2sde"
				height="450"
				style="border:0;width:100%"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			/>
		{:else}
			<div>
				<h4>Kindergarten Arche</h4>
				<p>
					Lachnerstraße 43
					<br />
					91058 Erlangen
				</p>

				<a
					href="https://www.openstreetmap.org/?mlat=49.55254&amp;mlon=11.02270#map=19/49.55254/11.02270"
					class="mt-4"
					target="_blank"
				>
					Auf Karte anzeigen
				</a>
			</div>
		{/if}
	{:else if parseInt(maps) === 1}
		<iframe
			title="Turnhalle Erlangen-Büchenbach"
			height="450"
			frameborder="0"
			scrolling="no"
			marginheight="0"
			marginwidth="0"
			src="https://www.openstreetmap.org/export/embed.html?bbox=10.96291780471802%2C49.590111892923375%2C10.96739709377289%2C49.5916871709354&amp;layer=mapnik&amp;marker=49.59089953828854%2C10.965157449245453"
			style="border:0;width:100%"
		/>
		<br /><small
			><a
				href="https://www.openstreetmap.org/?mlat=49.59090&amp;mlon=10.96516#map=19/49.59090/10.96516"
				>Größere Karte anzeigen</a
			></small
		>
	{:else if parseInt(maps) === 0}
		<iframe
			title="Turnhalle Erlangen-Büchenbach"
			src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d646.5901177259162!2d10.965274635581967!3d49.59095139670241!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa5a6089267024b38!2sTurnhalle%20Erlangen-B%C3%BCchenbach!5e0!3m2!1sde!2sde!4v1679155116809!5m2!1sde!2sde"
			height="450"
			style="border:0;width:100%"
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		/>
	{:else}
		<div>
			<h4>Schulturnhalle Grundschule Büchenbach</h4>
			<p>
				Jakob-Nein-Straße 4<br />
				91056 Erlangen
			</p>
			<a
				href="https://www.openstreetmap.org/?mlat=49.59092&amp;mlon=10.96516#map=19/49.59092/10.96516"
				class="mt-4"
				target="_blank"
			>
				Auf Karte anzeigen
			</a>
		</div>
	{/if}
</div>
