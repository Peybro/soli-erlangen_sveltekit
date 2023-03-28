<script lang="ts">
	export let open: string = '';

	const trainer = [
		{
			sport: 'Allgemein',
			name: 'Ralf Häusinger',
			email: 'vorstand@soli-erlangen.de',
			telefon: '09132 796970',
			mobil: '49017645145696',
			icon: ''
		},
		{
			sport: 'Kunstrad',
			name: 'Anne',
			email: 'kunstrad@soli-erlangen.de',
			telefon: '',
			mobil: '',
			icon: '/stickmen/logo_kunstrad_q.png'
		},
		{
			sport: 'Reigen',
			name: 'Renate',
			email: 'reigen@soli-erlangen.de',
			telefon: '09131 49454',
			mobil: '',
			icon: '/stickmen/logo_reigen_q.png'
		},
		{
			sport: 'Radball',
			name: 'Thomas',
			email: 'radball@soli-erlangen.de',
			telefon: '',
			mobil: '49017643839664',
			icon: '/stickmen/logo_radball_q.png'
		},
		{
			sport: 'Gymnastik',
			name: 'Heiner',
			email: 'gymnastik@soli-erlangen.de',
			telefon: '09131 990149',
			mobil: '',
			icon: '/stickmen/logo_gymnastik_q.png'
		},
		{
			sport: 'Kinderturnen',
			name: 'Ralf',
			email: 'kinderturnen@soli-erlagen.de',
			telefon: '09132 796970',
			mobil: '49017645145696',
			icon: '/stickmen/logo_kinderturnen_q.png'
		},
		{
			sport: 'Kindertanzen',
			name: 'Janice',
			email: 'kindertanzen@soli-erlangen.de',
			telefon: '',
			mobil: '49017632843418',
			icon: '/stickmen/logo_kindertanzen_q.png'
		}
	];
</script>

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
				</div>
			</div>
		</div>
	{/each}
</div>
