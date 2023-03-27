<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import { doc, onSnapshot } from 'firebase/firestore';
	import { db } from '../services/firebase';

	import { Hamburger } from 'svelte-hamburgers';

	let open: boolean = false;
	let width: number;

	let enabled = false;
	let title = '';
	let description = '';
	let bgColor = '';

	onMount(async () => {
		listenForUpdates();
	});

	// TODO fix ts-lint error
	function listenForUpdates() {
		onSnapshot(doc(db, 'banner', 'settings'), (doc) => {
			if (doc.data() !== undefined) {
				// @ts-ignore
				enabled = doc.data().enabled;
				// @ts-ignore
				title = doc.data().title;
				// @ts-ignore
				description = doc.data().description;
				// @ts-ignore
				bgColor = doc.data().bgColor;
			}
		});
	}
</script>

<svelte:window bind:innerWidth={width} />

<header class="bg-success">
	<nav class="navbar navbar-expand-lg navbar-dark">
		<div class="container">
			<a class="navbar-brand" href="/"
				><img src="/logo.png" width="40" id="logo" alt="Logo" class="d-inline-block" /> Soli-Erlangen</a
			>
			{#if width < 992}
				<Hamburger bind:open --color="white" />
			{/if}
			{#if open || width >= 992}
				<ul class="nav mb-2 mb-lg-0 d-flex" class:flex-column={width < 992}>
					{#each ['Zeitung', 'Vorstand', 'Geschichte', 'Kalender'] as link}
						<li class="nav-item">
							<a
								href={`/verein/${link.toLowerCase()}`}
								class="nav-link text-light"
								class:active={$page.url.pathname.includes(link.toLowerCase())}
								on:click={() => (open = false)}>{link}{link === 'Vorstand' ? ' und Trainer' : ''}</a
							>
						</li>
					{/each}
					<li class="nav-item bg-primary rounded-pill">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://de-de.facebook.com/RalfHaeusinger/"
							class="nav-link text-light"><i class="bi bi-facebook" /> Aktuelles</a
						>
					</li>
				</ul>
			{/if}
		</div>
	</nav>

	{#if enabled}
		<div class="container mt-2">
			<div class={`alert alert-${bgColor}`} role="alert">
				<h4 class="alert-heading">{title}</h4>
				{#each description.split('\n') as line, i}
					<p class="mb-0">
						{line}
					</p>
				{/each}
			</div>
		</div>
	{/if}

	<div id="sportarten-nav" class="d-flex justify-content-center bg-success">
		<ul class="nav nav-tabs border-0">
			{#each ['Kunstrad', 'Radball', 'Reigen', 'Gymnastik', 'Kinderturnen', 'Kindertanzen'] as sportart}
				<li class="nav-item">
					<a
						href={`/sportarten/${sportart.toLowerCase()}`}
						class="nav-link text-reset"
						class:active={$page.url.pathname.includes(sportart.toLowerCase())}
					>
						<img
							src={`/stickmen/logo_${sportart.toLowerCase()}_q.png`}
							alt={`${sportart}-Logo`}
							width={width < 340 ? '15' : width < 350 ? '20' : '30'}
						/>
						{#if width >= 992}
							{sportart}
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</header>

<style lang="scss">
	#sportarten-nav {
		// position: sticky;
		// top: 0;
		// z-index: 99999;

		.nav-item {
			img {
				max-width: 40px;
			}
		}
	}
</style>