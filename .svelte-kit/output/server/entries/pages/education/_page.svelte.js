import { c as create_ssr_component, a as add_attribute, e as escape, h as each, f as subscribe, v as validate_component } from "../../../chunks/ssr.js";
import { i as isMobile, B as Bubbles } from "../../../chunks/Bubbles.js";
import { i as images } from "../../../chunks/images.js";
const CollegeCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon } = $$props;
  let { degree } = $$props;
  let { college } = $$props;
  let { duration } = $$props;
  let { skills } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.degree === void 0 && $$bindings.degree && degree !== void 0)
    $$bindings.degree(degree);
  if ($$props.college === void 0 && $$bindings.college && college !== void 0)
    $$bindings.college(college);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.skills === void 0 && $$bindings.skills && skills !== void 0)
    $$bindings.skills(skills);
  return `<div class="card card-hover bg-initial shadow-sm p-4"><div class="flex gap-4 justify-start items-center"><img${add_attribute("src", icon, 0)}${add_attribute("alt", college, 0)} class="w-16 h-16 rounded-2xl self-start md:self-center"> <div class="flex flex-col"><h3 class="h3">${escape(degree)}</h3> <h4 class="h4">${escape(college)}</h4> <span class="font-light">${escape(duration)}</span></div></div> <div class="flex flex-col leading-relaxed font-light text-sm ml-4 md:ml-24 py-4">${slots.default ? slots.default({}) : ``}</div> <div class="flex gap-2 my-4 ml-0 md:ml-20 flex-wrap">${each(skills, (skill) => {
    return `<span class="badge variant-ringed-primary">${escape(skill)}</span>`;
  })}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMobile, $$unsubscribe_isMobile;
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  $$unsubscribe_isMobile();
  return `${$$result.head += `<!-- HEAD_svelte-tkc33l_START -->${$$result.title = `<title>Pablo Beltran | Education</title>`, ""}<!-- HEAD_svelte-tkc33l_END -->`, ""} <div class="flex flex-col gap-4 md:gap-8 py-8 md:py-16"><h1 class="title text-center z-10" data-svelte-h="svelte-19rjwj0">Learning <span class="gradient font-bold">Path</span></h1> <div class="flex w-full gap-1 md:gap-8 z-10"><div class="flex flex-col flex-grow py-2 pr-2 md:pr-0" data-svelte-h="svelte-5pxfht"><div class="flex justify-center items-center bg-primary-500 rounded-r-full rounded-l-none md:rounded-full p-2 w-12 h-12">2023</div> <span class="divider-vertical flex-grow !border-r-1 !border-primary-500"></span> <div class="flex justify-center items-center bg-primary-500 rounded-r-full rounded-l-none md:rounded-full p-2 w-12 h-12">2017</div></div> <div class="flex flex-col w-[95%] gap-4">${validate_component(CollegeCard, "CollegeCard").$$render(
    $$result,
    {
      icon: images.EDUCATION_UDLA,
      degree: "Bachelor of Engineering - BE, Computer Software Engineering",
      college: "Universidad de Las Américas (EC)",
      duration: "Mar 2019 - Feb 2023",
      skills: [
        "Software Architecture",
        "Scrum",
        "Agile Methodologies",
        "Node.Js",
        "Software Design"
      ]
    },
    {},
    {
      default: () => {
        return `<ul class="list-disc" data-svelte-h="svelte-6ngziv"><li>Served as a programming tutor for a public school in Zambisa, using Scratch to teach and
						develop students&#39; programming logic.</li> <li>Achieved a score of 9.33/10 on the ABET Capstone Project.</li> <li>Secured 5th place in the UDLA Tech 2019 engineering competition with FastChange, a
						biometric application for train ticket payments.- Achieved a score of 9.33/10 on the
						ABET Capstone Project. - Secured 5th place in the UDLA Tech 2019 engineering competition
						with FastChange, a biometric application for train ticket payments.</li></ul>`;
      }
    }
  )} ${validate_component(CollegeCard, "CollegeCard").$$render(
    $$result,
    {
      icon: images.EDUCATION_UTEC,
      degree: "Bachelor's degree, Computer Science",
      college: "UTEC - Universidad de Ingeniería y Tecnología",
      duration: "Jan 2017 - Mar 2019",
      skills: [
        "Leadership",
        "Algorithms",
        "Mathematics",
        "Entrepreneurship",
        "Computer Architecture"
      ]
    },
    {},
    {
      default: () => {
        return `<ul class="list-disc" data-svelte-h="svelte-4x9cb8"><li>Proposed Talluelo, a website enabling elders and retired individuals to create and guide
						courses, as part of an entrepreneur club initiative.</li> <li>Secured first place in the UTEC Entrepreneurship project with Talluelo.</li> <li>Achieved second place in the Software and Electronics Engineering contest with an
						application designed to manage household electronics via mobile devices.</li></ul>`;
      }
    }
  )}</div></div> ${!$isMobile ? `<div class="flex z-0 opacity-50">${validate_component(Bubbles, "Bubbles").$$render($$result, {}, {}, {})}</div>` : ``}</div>`;
});
export {
  Page as default
};
