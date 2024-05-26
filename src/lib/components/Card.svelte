<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';

	export let image: string;
	export let title: string;
	export let linkTo: string;
	export let date: string;
</script>

<div class="card card-hover bg-initial shadow-sm">
	<img src={image} alt={title} class="bg-black/50 w-full aspect-[11/6] rounded-t-3xl" />
	<div class="flex flex-col justify-around p-4 gap-4">
		<header class="flex justify-between items-center">
			<h3 class="h3 font-semibold leading-loose">{title}</h3>
			<a href={linkTo} target="_blank" rel="noopener noreferrer">
				<Icon name="link" width="w-6" height="h-6" />
			</a>
		</header>
		<hr class="!border-t-2 !border-tertiary-500" />
		<article>
			<p class="text-base font-light leading-relaxed">
				<slot />
			</p>
		</article>
		<span class="font-extralight text-sm text-gray-300 text-end">Completed on: {date}</span>
	</div>
</div>
