<script lang="ts">
	typeof window !== `undefined` && import('bootstrap');

	import { enhance } from '$app/forms';

	import Navbar from '$lib/components/Navbar.svelte';

	export let data;
</script>

<Navbar />

<div class="wrapper">
	<div class="container my-2">
		<main>
			<slot />
		</main>
	</div>

	<footer class="bg-success py-3">
		<div class="container d-flex">
			<a class="nav-item text-light text-decoration-none mx-2" href="/impressum">Impressum</a>

			<div class="container d-flex justify-content-end">
				<div class="row">
					<div class="col">
						{#if data.user}
							<form method="POST" action="/?/logout" use:enhance>
								<button
									type="submit"
									class="border-0 bg-success nav-item text-light text-decoration-none"
									>Logout
								</button>
							</form>
						{:else}
							<a class="nav-item text-light text-decoration-none" href="/login">Login</a>
						{/if}
					</div>
					<div class="col">
						<a class="nav-item text-light text-decoration-none" href="/settings">Einstellungen</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
</div>

<style global lang="scss">
	@import './../../node_modules/bootstrap/dist/css/bootstrap.css';
	@import './../../node_modules/bootstrap-icons/font/bootstrap-icons.css';

	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,
	body {
		height: 100%;
	}

	.wrapper {
		display: grid;
		grid-template-rows: 1fr auto;
		min-height: 100%;
	}

	main {
		grid-row: 1;
	}

	.heading {
		text-decoration: underline;
		text-decoration-color: #198754;
	}

	.invalid {
		color: red;
		margin-top: 0.3rem;
	}

	.special-btn {
		display: block;
		width: 100%;
		height: 50px;
		border: none;
		background-image: linear-gradient(120deg, #3498db, #8e44ad);
		background-size: 200%;
		color: #fff;
		outline: none;
		cursor: pointer;
		transition: 0.5s;
		border-radius: 10px;

		&:hover {
			background-position: right;
		}
	}
</style>
