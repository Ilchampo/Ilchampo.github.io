import { writable } from 'svelte/store';

const initialValue = false;

export const isMobile = writable(initialValue);
