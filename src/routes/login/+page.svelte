<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import { enhance } from '$app/forms';

	export let data: PageData;
	export let form: ActionData;
</script>

{#if data.loggedIn}
	<div class="alert alert-info" role="alert">
		<div>Du bist bereits eingeloggt.</div>
	</div>
{:else}
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
		<button type="submit" class="btn btn-primary">Einloggen</button>
	</form>
{/if}
