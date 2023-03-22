<script lang="ts">
	const vorstand = [
		{
			titel: '1. Vorstand',
			name: 'Ralf Häusinger',
			email: 'ralf.haeusinger@t-online.de',
			telefon: '09132 796970',
			mobil: '49017645145696'
		},
		{
			titel: '2. Vorstand',
			name: 'René',
			email: '',
			telefon: '',
			mobil: ''
		},
		{
			titel: 'Sportleiter',
			name: 'Thomas',
			email: 't.kretschmann@t-online.de',
			telefon: '',
			mobil: '49017643839664'
		},
		{
			titel: 'Fachwart Kunstrad',
			name: 'Anne',
			email: '',
			telefon: '',
			mobil: ''
		},
		{
			titel: 'Fachwart Reigen',
			name: 'Renate',
			email: 'renate.transchel@gmx.de',
			telefon: '09131 49454 ',
			mobil: ''
		},
		{
			titel: 'Frauenbeauftragte',
			name: 'Sabine',
			email: '',
			telefon: '09132 796970',
			mobil: ''
		}
	];
</script>

<div class="accordion" id="vorstandAccordion">
	{#each vorstand as person, i}
		<div class="accordion-item">
			<h2 class="accordion-header">
				<button
					class="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target={`#vorstand-collapse-${i}`}
				>
					{person.titel}
				</button>
			</h2>
			<div
				id={`vorstand-collapse-${i}`}
				class="accordion-collapse collapse"
				data-bs-parent="#vorstandAccordion"
			>
				<div class="accordion-body">
					<h4>{person.name}</h4>
					{#if person.email.length > 0}
						<a type="button" class="btn btn-outline-primary me-1" href={`mailto:${person.email}`}>
							<i class="bi bi-envelope" />
						</a>
					{/if}
					{#if person.telefon.length > 0}
						<a
							type="button"
							class="btn btn-outline-primary me-1"
							href={`tel:+49${person.telefon.substring(1, person.telefon.length).replace(' ', '')}`}
						>
							<i class="bi bi-telephone" />
							{person.telefon}
						</a>
					{/if}
					{#if person.mobil.length > 0}
						<a type="button" class="btn btn-outline-primary" href={`https://wa.me/${person.mobil}`}>
							<i class="bi bi-whatsapp" />
						</a>
					{/if}
				</div>
			</div>
		</div>
	{/each}
</div>
