import { c as create_ssr_component, a as add_attribute } from "../../chunks/ssr.js";
import "../../chunks/client.js";
import { i as images } from "../../chunks/images.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-17m6m0x_START -->${$$result.title = `<title>Pablo Beltran | Error</title>`, ""}<!-- HEAD_svelte-17m6m0x_END -->`, ""} <div class="flex flex-col h-full w-full justify-center items-center gap-4"><div class="flex" data-svelte-h="svelte-13b0sut"><img${add_attribute("src", images.NOT_FOUND, 0)} alt="Not Found" height="160px" class="opacity-75"></div> <button type="button" class="btn variant-filled-primary" data-svelte-h="svelte-ur261l">Go to Home</button></div>`;
});
export {
  Error as default
};
