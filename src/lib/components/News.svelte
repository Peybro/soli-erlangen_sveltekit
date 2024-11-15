<script lang="ts">
	let allowGCal = false;
</script>

<div>
	<!-- <h2 class="heading">Aktuell:</h2> -->
	<!-- <img src="/news/Sportakulum_2024.png" class="w-100" /> -->

	<h2 class="heading">Nächste Veranstaltungen:</h2>

	{#if !allowGCal}
		<button class="btn btn-primary m-1" on:click={() => (allowGCal = true)}
			>Google Kalender anzeigen (speichert Cookies)
		</button>
	{:else}
		<iframe
			src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FBerlin&showPrint=0&showTz=0&showTabs=0&showTitle=0&mode=AGENDA&showNav=0&showDate=0&src=dTFmZzZqdGprczlnNGRxb2VsMHRxc25ya2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%230B8043"
			style="border-width:0"
			width="100%"
			height="500"
			frameborder="0"
			scrolling="no"
			title="Termine der Soli Erlangen"
		/>
	{/if}
</div>
