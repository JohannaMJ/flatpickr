<script lang="ts">
	import flatpickr from 'flatpickr';
	import { Swedish } from "flatpickr/dist/l10n/sv.js";
	import { onMount } from 'svelte';

  	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

  	export let data;

  	const { form } = superForm(data.form);
		
	
	onMount(() => {
		flatpickr("#hej", {
				disableMobile: true,
				clickOpens: true,
				enableTime: true,
				defaultHour: 13,
				defaultDate: new Date(),
				defaultMinute: 0,
				minuteIncrement: 1,
				locale: {
					...Swedish,
					firstDayOfWeek: 1
				},
				dateFormat: "d\\ F\\ Y H:i",

			});
		})
</script>

<SuperDebug data={$form} />

<form method="POST">
	<input id="hej" bind:value={$form.datetime}/>
	<input type="text" name="name" bind:value={$form.name}/>
	<!-- <div><button>Submit</button></div> -->
</form>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">




