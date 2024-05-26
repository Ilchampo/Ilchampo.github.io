<script lang="ts">
	import { goto } from '$app/navigation';

	import images from '$lib/assets/images';
</script>

<svelte:head><title>Pablo Beltran | Error</title></svelte:head>

<div class="flex flex-col h-full w-full justify-center items-center gap-4">
	<div class="flex">
		<img src={images.NOT_FOUND} alt="Not Found" height="160px" class="opacity-75" />
	</div>
	<button type="button" class="btn variant-filled-primary" on:click={() => goto('/')}
		>Go to Home</button
	>
</div>
