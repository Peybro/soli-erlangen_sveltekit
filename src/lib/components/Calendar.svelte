<script lang="ts">
	const currentDate = new Date();
	let currentYear = currentDate.getFullYear();
	let currentMonth = currentDate.getMonth();
	let currentDay = currentDate.getDate();

	export let events: { name: string; start: string }[];
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
	$: monthWithEvents = Array(daysInMonth)
		.fill(0)
		.map((day, i) => {
			return events.filter((event) => {
				const eventDate = new Date(event.start);
				return (
					eventDate.getFullYear() === currentYear &&
					eventDate.getMonth() === currentMonth &&
					eventDate.getDate() === i + 1
				);
			});
		});

	$: daysInLastMonth = new Date(
		currentMonth === 0 ? currentYear - 1 : currentYear,
		currentMonth,
		0
	).getDate();
	$: daysOfLastMonthToShowLength = firstDayInMonth === 0 ? 6 : firstDayInMonth - 1;

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

	function setToday() {
		currentYear = currentDate.getFullYear();
		currentMonth = currentDate.getMonth();
		currentDay = currentDate.getDate();
	}
</script>

<div class="calendar">
	<div class="calendar-header">
		<button class="btn" on:click={handlePrevMonth}><i class="bi bi-chevron-left" /></button>
		<button class="btn" on:click={handleNextMonth}><i class="bi bi-chevron-right" /></button>
		<button class="setTodayBtn btn btn-outline-secondary" on:click={setToday}>Heute</button>
		<h3 class="currentDisplay">{months[currentMonth]} {currentYear}</h3>
	</div>
	<div class="calendar-grid">
		{#each days as weekDay}
			<div class="weekDay">{weekDay}</div>
		{/each}
		{#each Array(daysOfLastMonthToShowLength)
			.fill(0)
			.map((day, i) => daysInLastMonth - daysOfLastMonthToShowLength + 1 + i) as day}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="day lastMonth" on:click={handlePrevMonth}><span class="dayNr">{day}</span></div>
		{/each}
		{#each monthWithEvents as day, i}
			<div
				class="day"
				class:today={currentYear === new Date().getFullYear() &&
					currentMonth === new Date().getMonth() &&
					currentDate.getDate() === i + 1}
			>
				<span class="dayNr">{i + 1}</span>
				{#if day.length > 0}
					{#each day as event}
						<div class="event">
							<div class="eventTitle">{event.name}</div>
						</div>
					{/each}
				{/if}
			</div>
		{/each}
		{#each Array(7 - ((daysOfLastMonthToShowLength + daysInMonth) % 7 === 0 ? 7 : (daysOfLastMonthToShowLength + daysInMonth) % 7)) as day, i}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="day nextMonth" on:click={handleNextMonth}><span class="dayNr">{i + 1}</span></div>
		{/each}
	</div>
</div>

<style lang="scss">
	.calendar-header {
		display: flex;
		margin-bottom: 5px;

		.setTodayBtn {
			margin-left: 5px;
		}

		.currentDisplay {
			margin: 5px;
		}
	}

	.calendar-grid {
		display: grid;
		grid-template-columns: repeat(7, auto);
		text-align: center;
		border: 2px solid lightgrey;

		.weekDay {
			border: 1px solid lightgrey;
			background-color: rgb(225, 225, 225);
		}

		.day {
			height: 5rem;
			border: 1px solid lightgrey;
			position: relative;
			overflow: hidden;

			&:hover {
				background-color: #333;
				color: white;
			}

			.dayNr {
				position: absolute;
				top: 2px;
				right: 3px;
				z-index: 10;
			}
		}

		.today {
			background-color: lightyellow;
		}

		.lastMonth,
		.nextMonth {
			color: lightgrey;
		}

		.event {
			display: flex;
			overflow: hidden;
			height: 1.5rem;
			border: none;
			width: 90%;
			background: green
				linear-gradient(to right, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1) 100%);
			color: white;
			border-radius: 20px 0 0 20px;
			position: absolute;
			padding-left: 10px;
			margin-left: 5px;

			&:first-of-type {
				margin-top: 1rem;
			}

			&:hover {
				cursor: pointer;
			}

			.eventTitle {
				// max-width: 20px;
				// border: 1px solid pink;
				text-align: left;
				width: 100%;
			}
		}
	}
</style>
