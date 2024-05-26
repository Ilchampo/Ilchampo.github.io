import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component, h as each, f as subscribe } from "../../../chunks/ssr.js";
import { i as isMobile, B as Bubbles } from "../../../chunks/Bubbles.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { i as images } from "../../../chunks/images.js";
const JobCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon } = $$props;
  let { title } = $$props;
  let { contract } = $$props;
  let { type } = $$props;
  let { duration } = $$props;
  let { technologies } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.contract === void 0 && $$bindings.contract && contract !== void 0)
    $$bindings.contract(contract);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.technologies === void 0 && $$bindings.technologies && technologies !== void 0)
    $$bindings.technologies(technologies);
  return `<div class="card card-hover bg-initial shadow-sm p-4 gap-4"><div class="flex justify-start gap-4 items-center"><img${add_attribute("src", icon, 0)}${add_attribute("alt", title, 0)} class="w-16 h-16 rounded-2xl self-start md:self-center"> <div class="flex flex-col gap-2 justify-between"><header><h3 class="h3">${escape(title)}</h3></header> <div class="flex gap-2 justify-start items-center flex-wrap"><span class="badge variant-ringed-primary gap-2">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      name: "contract",
      height: "h-4",
      width: "w-4"
    },
    {},
    {}
  )} ${escape(contract)}</span> <span class="badge variant-ringed-primary">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      name: "type",
      height: "h-4",
      width: "w-4"
    },
    {},
    {}
  )} ${escape(type)}</span></div></div></div> <div class="flex flex-col ml-0 md:ml-16 gap-4 p-4"><span>${escape(duration)}</span> <article class="leading-relaxed text-sm">${slots.default ? slots.default({}) : ``}</article> <div class="flex gap-2 flex-wrap">${each(technologies, (tech) => {
    return `<span class="badge-icon variant-filled-primary w-8 h-8 p-2">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        name: tech,
        width: "w-6",
        height: "h-6",
        fill: "fill-primary-100"
      },
      {},
      {}
    )} </span>`;
  })}</div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMobile, $$unsubscribe_isMobile;
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  $$unsubscribe_isMobile();
  return `${$$result.head += `<!-- HEAD_svelte-1wgj4mn_START -->${$$result.title = `<title>Pablo Beltran | Experience</title>`, ""}<!-- HEAD_svelte-1wgj4mn_END -->`, ""} <div class="flex flex-col gap-4 md:gap-8 py-8 md:py-16"><h1 class="title text-center z-10" data-svelte-h="svelte-nqgvsl">My <span class="gradient font-bold">Experience</span></h1> <div class="flex w-full gap-1 md:gap-8 z-10"><div class="flex flex-col flex-grow py-2 pr-2 md:pr-0"><div class="flex justify-center items-center bg-primary-500 rounded-r-full rounded-l-none md:rounded-full p-2 w-12 h-12">${escape((/* @__PURE__ */ new Date()).getFullYear())}</div> <span class="divider-vertical flex-grow !border-r-1 !border-primary-500"></span> <div class="flex justify-center items-center bg-primary-500 rounded-r-full rounded-l-none md:rounded-full p-2 w-12 h-12" data-svelte-h="svelte-14n0onc">2018</div></div> <div class="flex flex-col w-[95%] gap-4">${validate_component(JobCard, "JobCard").$$render(
    $$result,
    {
      icon: images.COMPANY_QS,
      title: "Software Engineer II at QS",
      contract: "Full-Time",
      type: "Remote",
      duration: "Mar 2023 - Present",
      technologies: [
        "typescript",
        "graphql",
        "sql",
        "node",
        "react",
        "jest",
        "css",
        "html",
        "docker"
      ]
    },
    {},
    {
      default: () => {
        return `<ul class="list-disc ml-0 md:ml-4" data-svelte-h="svelte-1f9vupn"><li>Led the project to transform student profiles into downloadable PDFs, enhancing the
						advisor experience.</li> <li>Directed the project to encrypt sensitive application variables, enabling secure
						injection via GCP and improving deployment times for institution instances.</li> <li>Led the project to implement specialized majors tailored to each institution instance,
						enhancing customization capabilities.</li></ul>`;
      }
    }
  )} ${validate_component(JobCard, "JobCard").$$render(
    $$result,
    {
      icon: images.COMPANY_ROCKETREZ,
      title: "Full Stack Developer at RocketRez",
      contract: "Full-Time",
      type: "Hybrid",
      duration: "Jun 2022 - Mar 2023 · 10 mos",
      technologies: ["csharp", "typescript", "sql", "node", "react", "css", "html"]
    },
    {},
    {
      default: () => {
        return `<ul class="list-disc ml-0 md:ml-4" data-svelte-h="svelte-119l8wv"><li>Unified multiple communication channels, including SMS, Email, and RocketPass custom
						messaging, into a single endpoint to enhance the customer experience.</li> <li>Improved the Rocket Office Messaging Center UI to align with modern UI/UX guidelines.</li></ul>`;
      }
    }
  )} ${validate_component(JobCard, "JobCard").$$render(
    $$result,
    {
      icon: images.COMPANY_DEFT_CONSULTING,
      title: "Full Stack Developer at Deft Consulting",
      contract: "Full-Time",
      type: "Remote",
      duration: "Feb 2022 - Jun 2022 · 5 mos",
      technologies: ["sql", "node", "css", "html"]
    },
    {},
    {
      default: () => {
        return `<ul class="list-disc ml-0 md:ml-4" data-svelte-h="svelte-tm6lzd"><li>Gathered requirements and designed a billing application solution to streamline and
						improve customers&#39; internal business processes.</li> <li>Designed and implemented processes to effectively meet customers&#39; requirements.</li></ul>`;
      }
    }
  )} ${validate_component(JobCard, "JobCard").$$render(
    $$result,
    {
      icon: images.COMPANY_BUSINESS_IT,
      title: "Full Stack Developer at Grupo Business IT",
      contract: "Internship",
      type: "Remote",
      duration: "Feb 2022 - Jun 2022 · 5 mos",
      technologies: ["sql", "node", "react"]
    },
    {},
    {
      default: () => {
        return `<ul class="list-disc ml-0 md:ml-4" data-svelte-h="svelte-9chnwr"><li>Developed a web application to monitor virtual machines on Azure.</li> <li>Created PowerBI dashboards using DAX and Azure APIs to display real-time data.</li> <li>Monitored client statuses to ensure compliance with OWASP requirements.</li></ul>`;
      }
    }
  )} ${validate_component(JobCard, "JobCard").$$render(
    $$result,
    {
      icon: images.COMPANY_APLIOS,
      title: "Full Stack Developer at Aplios",
      contract: "Internship",
      type: "Hybrid",
      duration: "Apr 2021 - Sep 2021 · 6 mos",
      technologies: ["node", "mongo", "react", "jest"]
    },
    {},
    {
      default: () => {
        return `<ul class="list-disc ml-0 md:ml-4" data-svelte-h="svelte-1akx65c"><li>Developed backend code for the Rutaki application, aimed at improving gas and water
						delivery services in Quito, Ecuador.</li> <li>Created an admin dashboard for Rutaki optimized for desktop devices.</li> <li>Designed databases and user cases for Rutaki.</li></ul>`;
      }
    }
  )} ${validate_component(JobCard, "JobCard").$$render(
    $$result,
    {
      icon: images.COMPANY_UDLA,
      title: "Full Stack Developer at UDLA",
      contract: "Internship",
      type: "Remote",
      duration: "Dec 2020 - Apr 2021 · 5 mos",
      technologies: ["csharp", "sql", "html", "css"]
    },
    {},
    {
      default: () => {
        return `<ul class="list-disc ml-0 md:ml-4" data-svelte-h="svelte-23woe1"><li>Applied middleware and UI changes to the student payment portal.</li> <li>Improved processes in the &quot;Carpeta en Línea&quot; module to enhance the tutor experience.</li> <li>Performed bug fixes and implemented several UI enhancements.</li></ul>`;
      }
    }
  )} ${validate_component(JobCard, "JobCard").$$render(
    $$result,
    {
      icon: images.COMPANY_BLUE_CEAN,
      title: "Virtualization Consultant at Blue Ocean PE",
      contract: "Internship",
      type: "On-Site",
      duration: "Feb 2018 - Jun 2018 · 5 mos",
      technologies: ["html", "css"]
    },
    {},
    {
      default: () => {
        return `<ul class="list-disc ml-0 md:ml-4" data-svelte-h="svelte-1i8rba0"><li>Implemented virtualization solutions using Citrix and VMware.</li> <li>Developed the website for Blue Ocean Peru.</li> <li>Obtained certifications for VMware services.</li></ul>`;
      }
    }
  )}</div></div> ${!$isMobile ? `<div class="flex z-0 opacity-50">${validate_component(Bubbles, "Bubbles").$$render($$result, {}, {}, {})}</div>` : ``}</div>`;
});
export {
  Page as default
};
