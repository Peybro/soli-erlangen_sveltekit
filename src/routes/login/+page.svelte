<script lang="ts">
	import { enhance } from '$app/forms';

	export let data;
	export let form;
</script>

{#if data.user}
	<div class="alert alert-info" role="alert">
		<div>Du bist bereits eingeloggt.</div>
	</div>
{:else}
	<h2 class="heading">Login</h2>
	<div class="card p-3">
		{#if form?.error}
			<div class="alert alert-danger alert-dismissible fade show" role="alert">
				{form?.error}
				<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" />
			</div>
		{/if}
		<form action="?/login" method="POST" use:enhance>
			<div class="mb-3">
				<label class="form-label" for="email">Email</label>
				<input class="form-control" type="text" name="email" id="email" inputmode="email" />
			</div>
			<div class="mb-3">
				<label class="form-label" for="password">Passwort</label>
				<input class="form-control" type="password" name="password" id="password" />
			</div>
			<button type="submit" class="special-btn">Einloggen</button>
		</form>
	</div>
{/if}
