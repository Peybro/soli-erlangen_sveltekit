<script lang="ts">
	export let data;

	$: data.files.sort().reverse();
</script>

<h2 class="heading">Zeitung</h2>

{#await data.files}
	<h2>Lade PDF Dateien...</h2>
{:then files}
	{#if files.length > 0}
		<div class="accordion">
			<div class="accordion-item">
				<h2 class="accordion-header" id="panelsStayOpen-headingOne">
					<button
						class="accordion-button"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#panelsStayOpen-collapseOne"
					>
						Aktuelle Ausgabe:
						<span class="fw-bold"
							>{files[0].split('_')[3].startsWith('1.pdf')
								? 'Frühling-Herbst'
								: 'Herbst ' +
								  files[0].split('_')[2] +
								  '-Frühling' +
								  ' ' +
								  (parseInt(files[0].split('_')[2]) + 1)}</span
						>
					</button>
				</h2>
				<div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
					<div class="accordion-body">
						<iframe src={files[0]} title={files[0]} height="600px" loading="lazy" />
					</div>
				</div>
			</div>
			<div class="accordion-item">
				<h2 class="accordion-header" id="panelsStayOpen-headingTwo">
					<button
						class="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#panelsStayOpen-collapseTwo"
					>
						Ältere Ausgaben:
					</button>
				</h2>
				<div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
					<div class="accordion-body">
						<div class="grid">
							{#each files.slice(1) as pdf}
								<div>
									<h4>
										{pdf.split('_')[3].startsWith('1.pdf')
											? 'Frühling-Herbst ' + pdf.split('_')[2]
											: 'Herbst ' +
											  pdf.split('_')[2] +
											  '-Frühling' +
											  ' ' +
											  (parseInt(pdf.split('_')[2]) + 1)}
									</h4>
									<iframe
										src={pdf}
										title={pdf.split('.')[0].toString()}
										height="400px"
										loading="lazy"
									/>
									<a href={pdf}>Größer anzeigen</a>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;
	}

	@media screen and (max-width: 600px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}

	iframe {
		width: 100%;
	}
</style>
