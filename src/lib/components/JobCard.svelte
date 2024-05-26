<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';

	export let icon: string;
	export let title: string;
	export let contract: 'Full-Time' | 'Part-Time' | 'Internship';
	export let type: 'On-Site' | 'Hybrid' | 'Remote';
	export let duration: string;
	export let technologies: string[];
</script>

<div class="card card-hover bg-initial shadow-sm p-4 gap-4">
	<div class="flex justify-start gap-4 items-center">
		<img src={icon} alt={title} class="w-16 h-16 rounded-2xl self-start md:self-center" />
		<div class="flex flex-col gap-2 justify-between">
			<header><h3 class="h3">{title}</h3></header>
			<div class="flex gap-2 justify-start items-center flex-wrap">
				<span class="badge variant-ringed-primary gap-2">
					<Icon name="contract" height="h-4" width="w-4" />
					{contract}
				</span>
				<span class="badge variant-ringed-primary">
					<Icon name="type" height="h-4" width="w-4" />
					{type}
				</span>
			</div>
		</div>
	</div>
	<div class="flex flex-col ml-0 md:ml-16 gap-4 p-4">
		<span>{duration}</span>
		<article class="leading-relaxed text-sm"><slot /></article>
		<div class="flex gap-2 flex-wrap">
			{#each technologies as tech}
				<span class="badge-icon variant-filled-primary w-8 h-8 p-2">
					<Icon name={tech} width="w-6" height="h-6" fill="fill-primary-100" />
				</span>
			{/each}
		</div>
	</div>
</div>
