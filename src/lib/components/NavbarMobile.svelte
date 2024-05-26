<script lang="ts">
	import { goto } from '$app/navigation';
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	import Icon from '$lib/components/Icon.svelte';

	const drawerStore = getDrawerStore();

	const handleClick = (path: string): void => {
		goto(path);
		drawerStore.close();
	};
</script>

<div class="flex flex-col h-full p-4 gap-8">
	<div class="flex justify-center items-center gap-2">
		<span><Icon name="logo" width="w-12" height="h-12" /></span>
		<span class="font-semibold text-2xl">Pablo Beltran</span>
	</div>

	<div class="flex flex-col gap-4 w-full">
		<button type="button" class="btn variant-ringed-primary" on:click={() => handleClick('/')}>
			<span><Icon name="home" width="w-4" height="h-4" /></span>
			<span>Home</span>
		</button>
		<button
			type="button"
			class="btn variant-ringed-primary"
			on:click={() => handleClick('/projects')}
		>
			<span><Icon name="projects" width="w-4" height="h-4" /></span>
			<span>Projects</span>
		</button>
		<button
			type="button"
			class="btn variant-ringed-primary"
			on:click={() => handleClick('/experience')}
		>
			<span><Icon name="experience" width="w-4" height="h-4" /></span>
			<span>Experience</span>
		</button>
		<button
			type="button"
			class="btn variant-ringed-primary"
			on:click={() => handleClick('/education')}
		>
			<span><Icon name="education" width="w-4" height="h-4" /></span>
			<span>Education</span>
		</button>
		<button
			type="button"
			class="btn variant-ringed-primary"
			on:click={() => handleClick('/resume')}
		>
			<span><Icon name="resume" width="w-4" height="h-4" /></span>
			<span>Resume</span>
		</button>
	</div>
</div>
