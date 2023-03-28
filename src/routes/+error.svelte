<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Error</title>
</svelte:head>

<h1>Fehler - 404</h1>
<img
	alt="Seite nicht gefunden"
	src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTU0YWJmYzBjZTZlNWI0ZGI3ODU2ZmEyODBlNTAxYTY1M2U3M2JlYyZjdD1z/jWexOOlYe241y/giphy.gif"
/>

<h3>Diese Seite gibt hier nicht...</h3>
<p>
	Wenn du der Meinung bist, <span class="fst-italic">{$page.url.href}</span> sollte es geben, dann schreib
	uns doch gerne :)
</p>

<style scoped>
	img {
		max-width: 100%;
	}
</style>
