<script lang="ts">
	async function getVorstand() {
		const response = await fetch('/api/vorstand', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		return await response.json();
	}
</script>

{#await getVorstand()}
	<div class="alert alert-info" role="alert">
		<div class="d-flex justify-content-between">
			Vorstand wird geladen...
			<div class="spinner-border" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
		</div>
	</div>
{:then vorstand}
	<div class="accordion" id="vorstandAccordion">
		{#each vorstand as person, i}
			<div class="accordion-item">
				<h2 class="accordion-header">
					<button
						class="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#vorstand-collapse-{i}"
					>
						{person.titel}
					</button>
				</h2>
				<div
					id="vorstand-collapse-{i}"
					class="accordion-collapse collapse"
					data-bs-parent="#vorstandAccordion"
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
					</div>
				</div>
			</div>
		{/each}
	</div>
{/await}
