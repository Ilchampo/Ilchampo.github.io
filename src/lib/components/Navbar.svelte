<script lang="ts">
	import { AppBar, getDrawerStore } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import { isMobile } from '$lib/stores/mobile.store';

	import Icon from '$lib/components/Icon.svelte';
	import navbarMobileSettings from '$lib/constants/navbarMobileSettings';

	const drawerStore = getDrawerStore();
</script>

<AppBar padding="py-2 px-4" shadow="shadow-xl" background="bg-transparent">
	<svelte:fragment slot="lead">
		<button type="button" on:click={() => goto('/')}>
			<div class="flex justify-center items-center gap-2">
				<span><Icon name="logo" width="w-6" height="h-6" /></span>
				<span class="font-semibold">Pablo Beltran</span>
			</div>
		</button>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		{#if $isMobile}
			<button type="button" class="btn" on:click={() => drawerStore.open(navbarMobileSettings)}>
				<span><Icon name="bars" width="w-4" height="h-4" /></span>
			</button>
		{:else}
			<button type="button" class="btn variant-ringed-primary" on:click={() => goto('/projects')}>
				<span><Icon name="projects" width="w-4" height="h-4" /></span>
				<span>Projects</span>
			</button>
			<button type="button" class="btn variant-ringed-primary" on:click={() => goto('/experience')}>
				<span><Icon name="experience" width="w-4" height="h-4" /></span>
				<span>Experience</span>
			</button>
			<button type="button" class="btn variant-ringed-primary" on:click={() => goto('/education')}>
				<span><Icon name="education" width="w-4" height="h-4" /></span>
				<span>Education</span>
			</button>
			<button type="button" class="btn variant-ringed-primary" on:click={() => goto('/resume')}>
				<span><Icon name="resume" width="w-4" height="h-4" /></span>
				<span>Resume</span>
			</button>
		{/if}
	</svelte:fragment>
</AppBar>
