<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import NewspaperUpload from '$lib/components/NewspaperUpload.svelte';
	import { enhance } from '$app/forms';

	export let data: PageData;
	export let form: ActionData;
</script>

<h2 class="heading">Neues Vereinsblatt hochladen</h2>

<NewspaperUpload />

<!-- <hr />
<form method="POST" action="?/test" use:enhance>
	<input type="file" name="" />
	<button type="submit">Submit</button>
</form> -->
