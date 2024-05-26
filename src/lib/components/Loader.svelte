<script lang="ts">
	import { ProgressRadial } from '@skeletonlabs/skeleton';
</script>

<div class="flex flex-col h-screen w-screen justify-center items-center gap-8">
	<ProgressRadial
		stroke={30}
		meter="stroke-primary-500"
		track="stroke-primary-500/30"
		strokeLinecap="butt"
		value={undefined}
	/>
	<h3 class="h3 gradient-heading-primary">Drinking some coffee...</h3>
</div>
