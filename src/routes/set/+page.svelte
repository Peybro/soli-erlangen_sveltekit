<script>
	export let data;

	let enabled = data.enabled;
	let title = data.title;
	let description = data.description;
	let bgColor = data.bgColor;
</script>

<div class={`alert alert-${bgColor}`} role="alert">
	<h4 class="alert-heading">{title}</h4>
	{#each description.split('\n') as line, i}
		<p class="mb-0">
			{line}
		</p>
	{/each}
</div>

<h2 class="heading">Benachrichtigung bearbeiten</h2>
<div class="border p-2">
	<form method="post">
		<div class="form-check form-switch float-end">
			<input
				class="form-check-input"
				type="checkbox"
				id="enabledCheckBox"
				name="enabled"
				checked={enabled}
			/>
			<label class="form-check-label" for="enabledCheckBox">Anzeigen?</label>
		</div>
		<div class="mb-3">
			<label for="titleInput" class="form-label">Überschrift</label>
			<input
				id="titleInput"
				type="text"
				class="form-control"
				placeholder="Titel"
				name="title"
				value={title}
				on:input={(e) => (title = e.currentTarget.value)}
			/>
		</div>
		<div class="mb-3">
			<label for="descriptionInput" class="form-label">Beschreibung</label>
			<textarea
				id="descriptionInput"
				class="form-control"
				placeholder="Beschreibung"
				name="description"
				value={description}
				on:input={(e) => (description = e.currentTarget.value)}
			/>
		</div>
		<div class="mb-3">
			<label for="bgColorSelect" class="form-label">Hintergrundfarbe</label>
			<select
				id="bgColorSelect"
				class="form-select"
				name="bgColor"
				value={bgColor}
				on:change={(e) => (bgColor = e.currentTarget.value)}
			>
				<option value="success">Grün</option>
				<option value="warning">Gelb</option>
				<option value="danger">Rot</option>
				<option value="primary">Blau</option>
			</select>
		</div>

		<hr />
		<div class="mb-3">
			<label for="passwordInput" class="form-label">Passwort</label>
			<input id="passwordInput" type="password" class="form-control" name="pw" />
		</div>
		<button class="btn btn-secondary" type="submit">Speichern</button>
	</form>
</div>
