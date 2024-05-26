<script lang="ts">
	import { isMobile } from '$lib/stores/mobile.store';
	import { fade } from 'svelte/transition';

	import Card from '$lib/components/Card.svelte';
	import Bubbles from '$lib/components/Bubbles.svelte';
	import images from '$lib/assets/images';
</script>

<svelte:head><title>Pablo Beltran | Projects</title></svelte:head>

<div class="flex flex-col gap-4 md:gap-8 py-8 md:py-16" in:fade={{ duration: 1000 }}>
	<h1 class="title text-center z-10">Projects <span class="gradient font-bold">Delivered</span></h1>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
		<Card
			image={images.PROJECT_ALTIORE}
			title="Altiore Fiducia"
			linkTo="https://altiore-fiducia.netlify.app/"
			date="May 2025"
		>
			Developed an intuitive website for an Ecuadorian insurance broker using SvelteKit, with
			seamless deployment on Netlify.
		</Card>

		<Card
			image={images.PROJECT_BELWARE}
			title="BelwareTech"
			linkTo="https://belwaretech.com/"
			date="April 2025"
		>
			Built a robust site for a software development company with SvelteKit, SkeletonDev, Node.js,
			and MySQL, deployed on Netlify.
		</Card>

		<Card
			image={images.PROJECT_BUCCELLI}
			title="Buccelli Construction"
			linkTo="https://buccelliconstruction.com/"
			date="February 2025"
		>
			Created a dynamic website for an American roofing company with SvelteKit, Node.js, PostgreSQL,
			and Netlify deployment.
		</Card>
	</div>

	{#if !$isMobile}
		<div class="flex z-0 opacity-50">
			<Bubbles />
		</div>
	{/if}
</div>
