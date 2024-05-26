<script lang="ts">
	import { AppShell, Drawer, initializeStores } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { isMobile } from '$lib/stores/mobile.store';
	import { fade } from 'svelte/transition';

	import NavbarMobile from '$lib/components/NavbarMobile.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Loader from '$lib/components/Loader.svelte';

	import '../app.postcss';

	initializeStores();

	let isLoaded = false;

	const checkDeviceWidth = (): void => {
		isMobile.set(window.matchMedia('(max-width: 767px)').matches);
	};

	onMount(async (): Promise<unknown> => {
		checkDeviceWidth();
		window.addEventListener('resize', checkDeviceWidth);

		await new Promise((resolve) => setTimeout(resolve, 1500));
		isLoaded = true;

		return () => {
			window.removeEventListener('resize', checkDeviceWidth);
		};
	});
</script>

{#if isLoaded}
	<div in:fade={{ duration: 1000 }} class="flex flex-col h-screen w-screen">
		<Drawer><NavbarMobile /></Drawer>
		<AppShell>
			<svelte:fragment slot="header"><Navbar /></svelte:fragment>
			<div class="flex flex-col h-full w-full px-4 md:px-32">
				<slot />
			</div>
			<svelte:fragment slot="footer"><Footer /></svelte:fragment>
		</AppShell>
	</div>
{:else}
	<Loader />
{/if}
