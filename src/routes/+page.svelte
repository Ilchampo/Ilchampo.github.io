<script lang="ts">
	import { isMobile } from '$lib/stores/mobile.store';
	import { fade } from 'svelte/transition';

	import Bubbles from '$lib/components/Bubbles.svelte';
</script>

<svelte:head><title>Pablo Beltran | Home</title></svelte:head>

<div class="grid grid-cols-1 md:grid-cols-2 h-full" in:fade={{ duration: 1000 }}>
	<div class="flex flex-col gap-8 h-full justify-center z-10">
		<header class="leading-loose">
			<h1 class="title">
				It's <span class="gradient font-bold">great</span> to see you here.
			</h1>
		</header>
		<article class="leading-relaxed">
			<p class="font-light text-base">
				I am a Software Developer based in Quito, Ecuador, with a passion for continuous learning
				and skill enhancement. I thrive in collaborative environments and excel in working
				independently with minimal supervision. Learn more about me.
			</p>
		</article>
		<a
			href="mailto:beltranflores.juan@gmail.com"
			target="_blank"
			class="btn variant-filled-primary self-start w-48">Contact Me</a
		>
	</div>
	{#if !$isMobile}
		<div class="flex flex-col h-full opacity-50">
			<Bubbles />
		</div>
	{/if}
</div>
