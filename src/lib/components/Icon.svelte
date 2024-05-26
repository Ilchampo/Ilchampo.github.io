<script context="module">
	import icons from '$lib/assets/icons';
</script>

<script lang="ts">
	export let name = 'image';
	export let x = '0px';
	export let y = '0px';
	export let viewBox: string = icons[name]?.viewBox ?? '0 0 512 512';
	export let fill = 'fill-current';
	export let width = 'w-5';
	export let height = 'h-5';
	export let title = '';
	const cBase = 'inline-block outline-none';
	$: classesBase = `${cBase} ${fill} ${width} ${height}`;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	{x}
	{y}
	{viewBox}
	class="svg-icon {classesBase} {$$props.class ?? ''}"
	focusable="false"
	data-testid="svg-icon-id"
>
	{#if title}<title>{title}</title>{/if}
	{#if $$slots.default}
		<slot />
	{:else}
		<path d={icons[name]?.path} />
	{/if}
</svg>
