import {
  s as w,
  a as v,
  e as h,
  h as I,
  d as r,
  c as x,
  b as p,
  f as y,
  g as M,
  i as _,
  j as b,
  k as $,
  m as D,
  o as E,
} from "../chunks/scheduler.C-0YFhF0.js";
import {
  S as j,
  i as B,
  t as u,
  a as g,
  c as C,
  b as H,
  d as L,
  m as S,
  e as V,
  g as P,
  f as T,
} from "../chunks/index.ola9ti-H.js";
import { i as q, f as z } from "../chunks/mobile.store.D3CH42nr.js";
import { B as Q } from "../chunks/Bubbles.C49S0KwU.js";
function k(o) {
  let a, e, s;
  return (
    (e = new Q({})),
    {
      c() {
        (a = h("div")), H(e.$$.fragment), this.h();
      },
      l(n) {
        a = p(n, "DIV", { class: !0 });
        var l = y(a);
        L(e.$$.fragment, l), l.forEach(r), this.h();
      },
      h() {
        _(a, "class", "flex flex-col h-full opacity-50");
      },
      m(n, l) {
        b(n, a, l), S(e, a, null), (s = !0);
      },
      i(n) {
        s || (u(e.$$.fragment, n), (s = !0));
      },
      o(n) {
        g(e.$$.fragment, n), (s = !1);
      },
      d(n) {
        n && r(a), V(e);
      },
    }
  );
}
function A(o) {
  let a,
    e,
    s,
    n = `<header class="leading-loose"><h1 class="title">It&#39;s <span class="gradient font-bold">great</span> to see you here.</h1></header> <article class="leading-relaxed"><p class="font-light text-base">I am a Software Developer based in Quito, Ecuador, with a passion for continuous learning
				and skill enhancement. I thrive in collaborative environments and excel in working
				independently with minimal supervision. Learn more about me.</p></article> <a href="mailto:beltranflores.juan@gmail.com" target="_blank" class="btn variant-filled-primary self-start w-48">Contact Me</a>`,
    l,
    m,
    d,
    t = !o[0] && k();
  return {
    c() {
      (a = v()),
        (e = h("div")),
        (s = h("div")),
        (s.innerHTML = n),
        (l = v()),
        t && t.c(),
        this.h();
    },
    l(i) {
      I("svelte-1mu7p0o", document.head).forEach(r),
        (a = x(i)),
        (e = p(i, "DIV", { class: !0 }));
      var f = y(e);
      (s = p(f, "DIV", { class: !0, "data-svelte-h": !0 })),
        M(s) !== "svelte-17ykxku" && (s.innerHTML = n),
        (l = x(f)),
        t && t.l(f),
        f.forEach(r),
        this.h();
    },
    h() {
      (document.title = "Pablo Beltran | Home"),
        _(s, "class", "flex flex-col gap-8 h-full justify-center z-10"),
        _(e, "class", "grid grid-cols-1 md:grid-cols-2 h-full");
    },
    m(i, c) {
      b(i, a, c), b(i, e, c), $(e, s), $(e, l), t && t.m(e, null), (d = !0);
    },
    p(i, [c]) {
      i[0]
        ? t &&
          (P(),
          g(t, 1, 1, () => {
            t = null;
          }),
          C())
        : t
          ? c & 1 && u(t, 1)
          : ((t = k()), t.c(), u(t, 1), t.m(e, null));
    },
    i(i) {
      d ||
        (u(t),
        i &&
          (m ||
            D(() => {
              (m = T(e, z, { duration: 1e3 })), m.start();
            })),
        (d = !0));
    },
    o(i) {
      g(t), (d = !1);
    },
    d(i) {
      i && (r(a), r(e)), t && t.d();
    },
  };
}
function F(o, a, e) {
  let s;
  return E(o, q, (n) => e(0, (s = n))), [s];
}
class O extends j {
  constructor(a) {
    super(), B(this, a, F, A, w, {});
  }
}
export { O as component };
