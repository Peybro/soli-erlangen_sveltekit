<script lang="ts">
	export let open: string;
	import { infos } from '$lib/infos.ts';

	async function getTrainer() {
		const response = await fetch('/api/trainer', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		return await response.json();
	}
</script>

{#await getTrainer()}
	<div class="alert alert-info" role="alert">
		<div class="d-flex justify-content-between">
			Trainer werden geladen...
			<div class="spinner-border" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
		</div>
	</div>
{:then trainer}
	<div class="accordion" id="trainerAccordion">
		{#each trainer as person, i}
			<div class="accordion-item">
				<h2 class="accordion-header">
					<button
						class="accordion-button"
						class:collapsed={open !== person.sport.toLowerCase()}
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#trainer-collapse-{i}"
					>
						{#if person.icon !== ''}
							<img
								src="/stickmen/logo_{person.sport.toLowerCase()}_q.png"
								alt="{person.sport}-Icon"
								width="30"
							/>{' '}
						{/if}
						{person.sport}
					</button>
				</h2>
				<div
					id="trainer-collapse-{i}"
					class="accordion-collapse collapse"
					class:show={open === person.sport.toLowerCase()}
					data-bs-parent="#trainerAccordion"
				>
					<div class="accordion-body">
						<h4>{person.name}</h4>
						{#if person.email.length > 0}
							<a type="button" class="btn btn-outline-primary me-1" href="mailto:{person.email}">
								<i class="bi bi-envelope" />
							</a>
						{/if}
						{#if person.telefon.length > 0}
							<a
								type="button"
								class="btn btn-outline-primary me-1"
								href="tel:+49{person.telefon.substring(1, person.telefon.length).replace(' ', '')}"
							>
								<i class="bi bi-telephone" />
								{person.telefon}
							</a>
						{/if}
						{#if person.mobil.length > 0}
							<a type="button" class="btn btn-outline-primary" href="https://wa.me/{person.mobil}">
								<i class="bi bi-whatsapp" />
							</a>
						{/if}
						{#if infos.find((i) => i.sport.toLowerCase() === person.sport.toLowerCase()) !== undefined}
							<div class="mt-2">
								<!-- <i class="bi bi-calendar-event"></i> -->
								<!-- <i class="bi bi-alarm"></i> -->
								<h5 class="heading">Wann?</h5>
								{#if infos.find((i) => i.sport.toLowerCase() === person.sport.toLowerCase())?.times.length > 1}
									<ul>
										{#each infos.find((i) => i.sport.toLowerCase() === person.sport.toLowerCase())?.times as time}
											<li><h6>{time}</h6></li>
										{/each}
									</ul>
								{:else}
									<h6>
										{infos.find((i) => i.sport.toLowerCase() === person.sport.toLowerCase())
											?.times[0]}
									</h6>
								{/if}
							</div>

							<div>
								<!-- <i class="bi bi-geo-alt"></i> -->
								<h5 class="heading">Wo?</h5>
								{#if person.sport.toLowerCase() === 'kindertanzen'}
									<a
										href="https://www.openstreetmap.org/?mlat=49.552518&mlon=11.022647#map=19/49.552518/11.022647"
										target="_blank"
									>
										<span class="fw-bold">Kinderland Die Arche</span><br />
										<span>Lachnerstraße 43</span><br />
										<span>91058 Erlangen</span>
									</a>
								{:else}
									<a
										href="https://www.openstreetmap.org/?mlat=49.590900&mlon=10.965159#map=19/49.590900/10.965159"
										target="_blank"
									>
										<span class="fw-bold">Grundschule Büchenbach, Turnhalle</span><br />
										<span>Dorfstraße 21</span><br />
										<span>91056 Erlangen</span>
									</a>
								{/if}
							</div>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
{/await}
