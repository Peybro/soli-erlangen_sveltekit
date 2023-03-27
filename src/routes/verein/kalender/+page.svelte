<script>
	import Calendar from '$lib/components/Calendar.svelte';
</script>

<h2 class="heading">Kalender</h2>
<Calendar
	events={[
		{
			name: 'Test',
			start: '2022-12-15'
		},
		{
			name: 'Bezirksliga Oberfranken - Spielsaison 2022 / 2023 - Zwischenrunde 5',
			start: '2023-02-12'
		}
	]}
/>
