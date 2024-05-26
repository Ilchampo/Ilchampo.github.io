import { c as create_ssr_component, f as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { i as isMobile, B as Bubbles } from "../../chunks/Bubbles.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMobile, $$unsubscribe_isMobile;
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  $$unsubscribe_isMobile();
  return `${$$result.head += `<!-- HEAD_svelte-1mu7p0o_START -->${$$result.title = `<title>Pablo Beltran | Home</title>`, ""}<!-- HEAD_svelte-1mu7p0o_END -->`, ""} <div class="grid grid-cols-1 md:grid-cols-2 h-full"><div class="flex flex-col gap-8 h-full justify-center z-10" data-svelte-h="svelte-17ykxku"><header class="leading-loose"><h1 class="title">It&#39;s <span class="gradient font-bold">great</span> to see you here.</h1></header> <article class="leading-relaxed"><p class="font-light text-base">I am a Software Developer based in Quito, Ecuador, with a passion for continuous learning
				and skill enhancement. I thrive in collaborative environments and excel in working
				independently with minimal supervision. Learn more about me.</p></article> <a href="mailto:beltranflores.juan@gmail.com" target="_blank" class="btn variant-filled-primary self-start w-48">Contact Me</a></div> ${!$isMobile ? `<div class="flex flex-col h-full opacity-50">${validate_component(Bubbles, "Bubbles").$$render($$result, {}, {}, {})}</div>` : ``}</div>`;
});
export {
  Page as default
};
