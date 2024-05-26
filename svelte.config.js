import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: [vitePreprocess()],
	pahts: {
		base: process.env.NODE_ENV === 'production' ? '/Ilchampo.github.io' : '',
	},
	kit: {
		adapter: adapter()
	}
};
export default config;