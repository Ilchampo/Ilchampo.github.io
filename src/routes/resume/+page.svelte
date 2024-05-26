<script lang="ts">
	import { isMobile } from '$lib/stores/mobile.store';
	import { fade } from 'svelte/transition';

	import Icon from '$lib/components/Icon.svelte';
	import Bubbles from '$lib/components/Bubbles.svelte';
</script>

<svelte:head><title>Pablo Beltran | Resume</title></svelte:head>

<div
	class="flex flex-col gap-4 md:gap-8 py-8 md:py-16 justify-center items-center"
	in:fade={{ duration: 1000 }}
>
	<h1 class="title text-center z-10">Download <span class="gradient font-bold">Resume</span></h1>

	<div
		class="card card-hover flex flex-col gap-4 justify-center items-center z-10 bg-initial p-4 w-80 h-80"
	>
		<Icon name="download" height="h-40" width="w-40" />
		<button type="button" class="btn variant-filled-primary w-32">Download</button>
	</div>

	{#if !$isMobile}
		<div class="flex z-0 opacity-50">
			<Bubbles />
		</div>
	{/if}
</div>
