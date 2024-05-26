import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component, f as subscribe } from "../../../chunks/ssr.js";
import { i as isMobile, B as Bubbles } from "../../../chunks/Bubbles.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { i as images } from "../../../chunks/images.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  let { title } = $$props;
  let { linkTo } = $$props;
  let { date } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.linkTo === void 0 && $$bindings.linkTo && linkTo !== void 0)
    $$bindings.linkTo(linkTo);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  return `<div class="card card-hover bg-initial shadow-sm"><img${add_attribute("src", image, 0)}${add_attribute("alt", title, 0)} class="bg-black/50 w-full aspect-[11/6] rounded-t-3xl"> <div class="flex flex-col justify-around p-4 gap-4"><header class="flex justify-between items-center"><h3 class="h3 font-semibold leading-loose">${escape(title)}</h3> <a${add_attribute("href", linkTo, 0)} target="_blank" rel="noopener noreferrer">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      name: "link",
      width: "w-6",
      height: "h-6"
    },
    {},
    {}
  )}</a></header> <hr class="!border-t-2 !border-tertiary-500"> <article><p class="text-base font-light leading-relaxed">${slots.default ? slots.default({}) : ``}</p></article> <span class="font-extralight text-sm text-gray-300 text-end">Completed on: ${escape(date)}</span></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMobile, $$unsubscribe_isMobile;
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  $$unsubscribe_isMobile();
  return `${$$result.head += `<!-- HEAD_svelte-g0t8td_START -->${$$result.title = `<title>Pablo Beltran | Projects</title>`, ""}<!-- HEAD_svelte-g0t8td_END -->`, ""} <div class="flex flex-col gap-4 md:gap-8 py-8 md:py-16"><h1 class="title text-center z-10" data-svelte-h="svelte-1ule1r5">Projects <span class="gradient font-bold">Delivered</span></h1> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 z-10">${validate_component(Card, "Card").$$render(
    $$result,
    {
      image: images.PROJECT_ALTIORE,
      title: "Altiore Fiducia",
      linkTo: "https://altiore-fiducia.netlify.app/",
      date: "May 2025"
    },
    {},
    {
      default: () => {
        return `Developed an intuitive website for an Ecuadorian insurance broker using SvelteKit, with
			seamless deployment on Netlify.`;
      }
    }
  )} ${validate_component(Card, "Card").$$render(
    $$result,
    {
      image: images.PROJECT_BELWARE,
      title: "BelwareTech",
      linkTo: "https://belwaretech.com/",
      date: "April 2025"
    },
    {},
    {
      default: () => {
        return `Built a robust site for a software development company with SvelteKit, SkeletonDev, Node.js,
			and MySQL, deployed on Netlify.`;
      }
    }
  )} ${validate_component(Card, "Card").$$render(
    $$result,
    {
      image: images.PROJECT_BUCCELLI,
      title: "Buccelli Construction",
      linkTo: "https://buccelliconstruction.com/",
      date: "February 2025"
    },
    {},
    {
      default: () => {
        return `Created a dynamic website for an American roofing company with SvelteKit, Node.js, PostgreSQL,
			and Netlify deployment.`;
      }
    }
  )}</div> ${!$isMobile ? `<div class="flex z-0 opacity-50">${validate_component(Bubbles, "Bubbles").$$render($$result, {}, {}, {})}</div>` : ``}</div>`;
});
export {
  Page as default
};
