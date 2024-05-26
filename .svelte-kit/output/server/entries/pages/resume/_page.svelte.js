import { c as create_ssr_component, f as subscribe, v as validate_component } from "../../../chunks/ssr.js";
import { i as isMobile, B as Bubbles } from "../../../chunks/Bubbles.js";
import { I as Icon } from "../../../chunks/Icon.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMobile, $$unsubscribe_isMobile;
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  $$unsubscribe_isMobile();
  return `${$$result.head += `<!-- HEAD_svelte-fayvlo_START -->${$$result.title = `<title>Pablo Beltran | Resume</title>`, ""}<!-- HEAD_svelte-fayvlo_END -->`, ""} <div class="flex flex-col gap-4 md:gap-8 py-8 md:py-16 justify-center items-center"><h1 class="title text-center z-10" data-svelte-h="svelte-1l57z6q">Download <span class="gradient font-bold">Resume</span></h1> <div class="card card-hover flex flex-col gap-4 justify-center items-center z-10 bg-initial p-4 w-80 h-80">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      name: "download",
      height: "h-40",
      width: "w-40"
    },
    {},
    {}
  )} <button type="button" class="btn variant-filled-primary w-32" data-svelte-h="svelte-zp9ads">Download</button></div> ${!$isMobile ? `<div class="flex z-0 opacity-50">${validate_component(Bubbles, "Bubbles").$$render($$result, {}, {}, {})}</div>` : ``}</div>`;
});
export {
  Page as default
};
