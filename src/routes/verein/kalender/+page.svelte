<script lang="ts">
	import Calendar from '$lib/components/Calendar.svelte';

	let allowGCal = false;
	let previewNewCalendar = false;
	let events = [
		{
			name: 'Test',
			start: '2022-12-15'
		},
		{
			name: 'Bezirksliga Oberfranken - Spielsaison 2022 / 2023 - Zwischenrunde 5',
			start: '2023-02-12'
		}
	];

	let newEventName = '';
	let newEventStart = '';

	function addNewEvent(event: any) {
		event.preventDefault();

		if (
			newEventName !== '' &&
			newEventStart !== null &&
			newEventStart !== undefined &&
			newEventStart !== ''
		) {
			events.push({
				name: newEventName,
				start: newEventStart
			});

			previewNewCalendar = false;
			setTimeout(() => {
				previewNewCalendar = true;
			}, 5);

			newEventName = '';
			newEventStart = '';
		}
	}
</script>

<h2 class="heading">Kalender</h2>

{#if !allowGCal}
	<div class="alert alert-warning" role="alert">
		<p>
			Für die Darstellung unserer Termine nutzen wir im Moment noch den Google Kalender. Da wir
			nicht möchten dass ungefragt <strong>Cookies in deinem Browser gespeichert werden</strong>,
			musst du nochmal extra bestätigen, dass der Google Kalender angezeigt werden soll.
		</p>
		<p>Wir arbeiten daran eine schönere Methode zu benzuten... :)</p>
	</div>
	<button class="btn btn-primary m-1" on:click={() => (allowGCal = true)}
		>Google Kalender anzeigen
	</button>
{:else}
	<iframe
		src="https://calendar.google.com/calendar/embed?src=u1fg6jtjks9g4dqoel0tqsnrkc%40group.calendar.google.com&ctz=Europe%2FBerlin"
		style="border: 0"
		height="600"
		frameborder="0"
		scrolling="no"
		title="Termine der Soli Erlangen"
	/>
{/if}

{#if previewNewCalendar}
	<button class="btn btn-outline-primary m-1" on:click={() => (previewNewCalendar = false)}
		>Vorschau für neuen Kalender verbergen
	</button>
	<div class="mt-3">
		<Calendar bind:events />
		<form class="mt-2 p-2 border rounded" on:submit={(e) => addNewEvent(e)}>
			<h5>Neuen Termin zufügen</h5>
			<div class="mb-3">
				<label for="eventTitle" class="form-label">Titel</label>
				<input
					class="form-control"
					id="eventTitle"
					type="text"
					bind:value={newEventName}
					placeholder="Event Titel"
				/>
			</div>
			<div class="mb-3">
				<label for="eventStart" class="form-label">Datum</label>
				<input class="form-control" id="eventStart" type="date" bind:value={newEventStart} />
			</div>
			<button class="btn btn-outline-primary" type="submit">Hinzufügen</button>
		</form>
	</div>
{:else}
	<button class="btn btn-outline-primary m-1" on:click={() => (previewNewCalendar = true)}
		>Vorschau für neuen Kalender anzeigen
	</button>
{/if}

<style>
	iframe {
		width: 100%;
	}
</style>
