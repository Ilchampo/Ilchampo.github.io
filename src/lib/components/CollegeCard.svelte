<script lang="ts">
	export let icon: string;
	export let degree: string;
	export let college: string;
	export let duration: string;
	export let skills: string[];
</script>

<div class="card card-hover bg-initial shadow-sm p-4">
	<div class="flex gap-4 justify-start items-center">
		<img src={icon} alt={college} class="w-16 h-16 rounded-2xl self-start md:self-center" />
		<div class="flex flex-col">
			<h3 class="h3">{degree}</h3>
			<h4 class="h4">{college}</h4>
			<span class="font-light">{duration}</span>
		</div>
	</div>
	<div class="flex flex-col leading-relaxed font-light text-sm ml-4 md:ml-24 py-4">
		<slot />
	</div>
	<div class="flex gap-2 my-4 ml-0 md:ml-20 flex-wrap">
		{#each skills as skill}
			<span class="badge variant-ringed-primary">{skill}</span>
		{/each}
	</div>
</div>
