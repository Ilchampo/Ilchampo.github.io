import {
  s as t,
  e as a,
  b as n,
  g as v,
  i as h,
  j as g,
  n as i,
  d as o,
} from "./scheduler.C-0YFhF0.js";
import { S as d, i as p } from "./index.ola9ti-H.js";
function f(s) {
  let e,
    l =
      '<svg class="svg-icon circle fill-primary-600 svelte-1nj6p94" id="circle1" width="400" height="400"><circle cx="200" cy="200" r="200"></circle></svg> <svg class="svg-icon circle fill-primary-500 svelte-1nj6p94" id="circle2" width="300" height="300"><circle cx="150" cy="150" r="150"></circle></svg> <svg class="svg-icon circle fill-primary-400 svelte-1nj6p94" id="circle3" width="250" height="250"><circle cx="125" cy="125" r="125"></circle></svg> <svg class="svg-icon circle fill-primary-300 svelte-1nj6p94" id="circle4" width="200" height="200"><circle cx="100" cy="100" r="100"></circle></svg> <svg class="svg-icon circle fill-primary-200 svelte-1nj6p94" id="circle5" width="100" height="100"><circle cx="50" cy="50" r="40"></circle></svg>';
  return {
    c() {
      (e = a("div")), (e.innerHTML = l), this.h();
    },
    l(c) {
      (e = n(c, "DIV", { class: !0, "data-svelte-h": !0 })),
        v(e) !== "svelte-1g4yrwk" && (e.innerHTML = l),
        this.h();
    },
    h() {
      h(e, "class", "flex flex-col h-full overflow-hidden");
    },
    m(c, r) {
      g(c, e, r);
    },
    p: i,
    i,
    o: i,
    d(c) {
      c && o(e);
    },
  };
}
class x extends d {
  constructor(e) {
    super(), p(this, e, null, f, t, {});
  }
}
export { x as B };
