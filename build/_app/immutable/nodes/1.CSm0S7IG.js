import {
  s as T,
  a as g,
  e as u,
  h as k,
  d as o,
  c as b,
  b as f,
  f as E,
  g as y,
  i as r,
  j as C,
  k as h,
  l as N,
  n as p,
} from "../chunks/scheduler.C-0YFhF0.js";
import { S as D, i as H } from "../chunks/index.ola9ti-H.js";
import { g as O } from "../chunks/entry.DYimn2_3.js";
import { i as $ } from "../chunks/images.H9u0yAjq.js";
function j(i) {
  let s,
    t,
    a,
    _ = `<img src="${$.NOT_FOUND}" alt="Not Found" height="160px" class="opacity-75"/>`,
    c,
    e,
    v = "Go to Home",
    d,
    x;
  return {
    c() {
      (s = g()),
        (t = u("div")),
        (a = u("div")),
        (a.innerHTML = _),
        (c = g()),
        (e = u("button")),
        (e.textContent = v),
        this.h();
    },
    l(l) {
      k("svelte-17m6m0x", document.head).forEach(o),
        (s = b(l)),
        (t = f(l, "DIV", { class: !0 }));
      var n = E(t);
      (a = f(n, "DIV", { class: !0, "data-svelte-h": !0 })),
        y(a) !== "svelte-13b0sut" && (a.innerHTML = _),
        (c = b(n)),
        (e = f(n, "BUTTON", { type: !0, class: !0, "data-svelte-h": !0 })),
        y(e) !== "svelte-ur261l" && (e.textContent = v),
        n.forEach(o),
        this.h();
    },
    h() {
      (document.title = "Pablo Beltran | Error"),
        r(a, "class", "flex"),
        r(e, "type", "button"),
        r(e, "class", "btn variant-filled-primary"),
        r(
          t,
          "class",
          "flex flex-col h-full w-full justify-center items-center gap-4",
        );
    },
    m(l, m) {
      C(l, s, m),
        C(l, t, m),
        h(t, a),
        h(t, c),
        h(t, e),
        d || ((x = N(e, "click", i[0])), (d = !0));
    },
    p,
    i: p,
    o: p,
    d(l) {
      l && (o(s), o(t)), (d = !1), x();
    },
  };
}
function B(i) {
  return [() => O("/")];
}
class S extends D {
  constructor(s) {
    super(), H(this, s, B, j, T, {});
  }
}
export { S as component };
