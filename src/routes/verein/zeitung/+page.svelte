<script lang="ts">
	export let data;

	// let aktuell = data.newsPapers[0].split('/').slice(-1).toString().split('_');
</script>

<h2 class="heading">Zeitung</h2>

{#await data.files}
	<p>loading...</p>
{:then files}
	<iframe src={files[0]} title={'Test'} loading="lazy" />
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<!-- <object data={data.files[0]} type="application/pdf" width="100%" height="600px" title="Test">
	<p>
		It appears you don't have a PDF plugin for this browser. No biggie... you can <a
			href={data.files[0]}>click here to download the PDF file.</a
		>
	</p>
</object> -->

<!-- {#each data.files as pdf}
	<iframe src={pdf} title={pdf.split('/').slice(-1).toString()} />

	<object data={pdf} type="application/pdf" width="100%" height="600px" title="Test">
		<p>
			It appears you don't have a PDF plugin for this browser. No biggie... you can <a
				href={pdf}>click here to download the PDF file.</a
			>
		</p>
	</object>
{/each} -->

<!-- <div class="accordion">
	<div class="accordion-item">
		<h2 class="accordion-header" id="panelsStayOpen-headingOne">
			<button
				class="accordion-button"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#panelsStayOpen-collapseOne"
			>
				Aktuelle Ausgabe: <span class="fw-bold"
					>{aktuell[3] === '1.pdf'
						? 'Frühling-Herbst'
						: 'Herbst ' + aktuell[2] + '-Frühling' + ' ' + (parseInt(aktuell[2]) + 1)}</span
				>
			</button>
		</h2>
		<div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
			<div class="accordion-body">
				<iframe
					src={data.newsPapers[0]}
					loading="lazy"
					width="100%"
					height="600px"
					title={data.newsPapers[0].split('/').slice(-1).toString()}
				/>
				<a
					type="button"
					class="btn btn-primary"
					href={data.newsPapers[0]}
					target="_blank"
					rel="noreferrer"
				>
					Größer anzeigen
				</a>
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
					{#each data.newsPapers.slice(1) as newsPaper, i}
						<div>
							<iframe
								src={newsPaper}
								loading="lazy"
								width="100%"
								height="300px"
								title={newsPaper.split('/').slice(-1).toString()}
							/>
							<a
								type="button"
								class="btn btn-primary"
								href={newsPaper}
								target="_blank"
								rel="noreferrer"
							>
								{newsPaper.split('/').slice(-1).toString().split('_')[3] === '1.pdf'
									? 'Frühling-Herbst ' + newsPaper.split('/').slice(-1).toString().split('_')[2]
									: 'Herbst ' +
									  newsPaper.split('/').slice(-1).toString().split('_')[2] +
									  '-Frühling' +
									  ' ' +
									  (parseInt(newsPaper.split('/').slice(-1).toString().split('_')[2]) + 1)}
							</a>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div> -->
<style>
	/* .grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;
	}

	@media screen and (max-width: 600px) {
		.grid {
			grid-template-columns: 1fr;
		}
	} */

	iframe {
		width: 100%;
		height: 600px;
	}
</style>
