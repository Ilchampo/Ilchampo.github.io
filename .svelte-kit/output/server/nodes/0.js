import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.0FCAudCC.js","_app/immutable/chunks/scheduler.C-0YFhF0.js","_app/immutable/chunks/index.ola9ti-H.js","_app/immutable/chunks/index.BqH4I7s2.js","_app/immutable/chunks/mobile.store.D3CH42nr.js","_app/immutable/chunks/entry.j7SDI27J.js","_app/immutable/chunks/Icon.BHaOAdXx.js"];
export const stylesheets = ["_app/immutable/assets/0.WXz_qCQF.css"];
export const fonts = [];
