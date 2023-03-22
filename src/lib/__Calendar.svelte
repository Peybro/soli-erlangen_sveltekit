<script lang="ts">
	let monthView = true;
	let weekView = false;
	let listView = false;

	let currentDate = new Date();
	let currentYear = currentDate.getFullYear();
	let currentMonth = currentDate.getMonth();
	let currentDay = currentDate.getDate();

	export let events: any[];
	export let months: [
		string,
		string,
		string,
		string,
		string,
		string,
		string,
		string,
		string,
		string,
		string,
		string
	] = [
		'Januar',
		'Februar',
		'März',
		'April',
		'Mai',
		'Juni',
		'Juli',
		'August',
		'September',
		'Oktober',
		'November',
		'Dezember'
	];
	export let days: [string, string, string, string, string, string, string] = [
		'Mo',
		'Di',
		'Mi',
		'Do',
		'Fr',
		'Sa',
		'So'
	];

	$: firstDayInMonth = new Date(currentYear, currentMonth, 1).getDay();
	$: daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

	function viewToday() {
		currentYear = currentDate.getFullYear();
		currentMonth = currentDate.getMonth();
		currentDay = currentDate.getDate();
	}

	function handlePrevMonth() {
		if (currentMonth === 0) {
			currentMonth = 11;
			currentYear--;
		} else {
			currentMonth--;
		}
	}

	function handleNextMonth() {
		if (currentMonth === 11) {
			currentMonth = 0;
			currentYear++;
		} else {
			currentMonth++;
		}
	}

	$: calDays = makeChunks(
		[
			...Array(firstDayInMonth === 0 ? 6 : firstDayInMonth - 1)
				.fill('prev')
				.map((x, i) => {
					const prevDate = new Date(currentYear, currentMonth, 0).getDate();
					return {
						type: 'prev',
						nr: prevDate + (i - (firstDayInMonth === 0 ? 6 : firstDayInMonth - 1) + 1)
					};
				}),
			...fillEvents(
				Array(daysInMonth)
					.fill(0)
					.map((_, i) => ({ type: 'normal', nr: i + 1 }))
			)
		],
		7
	);

	$: calDaysWithEnd = makeChunks(
		[
			...calDays.flat(1),
			...Array(7 - calDays[calDays.length - 1].length)
				.fill('next')
				.map((x, i) => ({ type: 'next', nr: i + 1 }))
		],
		7
	);

	function fillEvents(arr: any[]) {
		let newArr = arr.flat(1);

		events.forEach((event) => {
			const date = new Date(event.start);

			if (currentYear === date.getFullYear() && currentMonth === date.getMonth()) {
				newArr[date.getDate() - 1] = { ...newArr[date.getDate() - 1], events: event };
			}
		});

		return newArr;
	}

	function makeChunks(arr: any[], size: number) {
		const newArr = [];
		for (let i = 0; i < arr.length; i += size) {
			const chunk = arr.slice(i, i + size);
			newArr.push(chunk);
		}
		return newArr;
	}
</script>

<div class="calendar">
	<div class="switchView btn-group">
		<button
			class="btn btn-dark btn-sm"
			disabled={monthView}
			on:click={() => {
				monthView = true;
				weekView = false;
				listView = false;
			}}>Monat</button
		>
		<!-- <button
        class="btn btn-dark btn-sm"
        disabled={weekView}
        on:click={() => {
            monthView = false;
            weekView = true;
            listView = false;
        }}>Woche</button
    > -->
		<button
			class="btn btn-dark btn-sm"
			disabled={listView}
			on:click={() => {
				monthView = false;
				weekView = false;
				listView = true;
			}}>Liste</button
		>
	</div>

	{#if monthView}
		<div class="d-flex justify-content-start">
			<div>
				<div class="btn-group">
					<button class="btn btn-dark btn-sm" on:click={handlePrevMonth}
						><i class="bi bi-chevron-left" /></button
					>
					<button class="btn btn-dark btn-sm" on:click={handleNextMonth}
						><i class="bi bi-chevron-right" /></button
					>
				</div>
				<button
					class="btn btn-dark btn-sm"
					on:click={viewToday}
					disabled={currentYear === currentDate.getFullYear() &&
						currentMonth === currentDate.getMonth()}>Heute</button
				>
			</div>
			<h3 class="ms-3">{months[currentMonth]} {currentYear}</h3>
		</div>

		<div class="d-flex justify-content-around">
			{#each days as weekDay}
				<td class="weekday">{weekDay}</td>
			{/each}
		</div>
		<div class="grid">
			{#each calDaysWithEnd as dateRow, i}
				<div class="d-flex">
					{#each dateRow as day}
						{#if day.type === 'prev'}
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<div class="day text-muted" on:click={handlePrevMonth}>
								<div class="dayNr">{day.nr}</div>
							</div>
						{:else if day.type === 'next'}
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<div class="day text-muted" on:click={handleNextMonth}>
								<div class="dayNr">{day.nr}</div>
							</div>
						{:else}
							<div
								class="day"
								class:today={day.nr === currentDay && currentMonth === currentDate.getMonth()}
							>
								{#if day.nr !== 0}
									<div class="dayNr">{day.nr}</div>
									{#if day.hasOwnProperty('events')}
										<span class="event bg-success">{day.events.name}</span>
									{/if}
								{/if}
							</div>
						{/if}
					{/each}
				</div>
			{/each}
		</div>
	{/if}

	{#if listView}
		{#each months as month, i}
			<h4>{month}</h4>
			{#each events.filter((event) => {
				const eventDate = new Date(event.start);
				return eventDate.getMonth() === i;
			}) as event}
				<div><span class="fw-bold">{new Date(event.start).getDate()}.</span> {event.name}</div>
				<hr />
			{/each}
		{/each}
	{/if}
</div>

<style lang="scss">
	.calendar {
		position: relative;
		width: 700px;

		.switchView {
			position: absolute;
			top: 0;
			right: 0;
		}

		.weekday {
			text-align: center;
			border: 1px solid lightgrey;
			width: 100px;
			background-color: rgb(236, 236, 236);
		}

		.grid {
			.day {
				border: 1px solid lightgrey;

				position: relative;
				width: 100px;
				height: 100px;
				overflow: hidden;

				.dayNr {
					position: absolute;
					top: 0;
					right: 5px;
				}

				.event {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-35%, -50%);

					max-height: 3rem;
					overflow: hidden;
					text-align: left;
					border-radius: 5px;
					padding: 2px 5px;
				}

				&.today {
					background-color: #fffadf;
				}

				&:hover {
					background-color: #333;
					color: white;
				}
			}
		}
	}
</style>
