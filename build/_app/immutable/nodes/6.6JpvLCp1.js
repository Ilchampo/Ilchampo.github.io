import {
  s as H,
  a as y,
  e as _,
  h as L,
  d,
  c as w,
  b,
  f as D,
  g as U,
  i as p,
  j as M,
  k as u,
  l as q,
  m as A,
  o as F,
} from "../chunks/scheduler.C-0YFhF0.js";
import {
  S as N,
  i as O,
  b as S,
  d as T,
  m as V,
  t as v,
  a as x,
  c as Q,
  e as j,
  g as G,
  f as J,
} from "../chunks/index.ola9ti-H.js";
import { g as K } from "../chunks/globals.D0QH3NT1.js";
import { i as W, f as X } from "../chunks/mobile.store.D3CH42nr.js";
import { I as Y } from "../chunks/Icon.BHaOAdXx.js";
import { B as Z } from "../chunks/Bubbles.C49S0KwU.js";
const ee = "" + new URL("../assets/resume.CRQVUcyA.pdf", import.meta.url).href,
  te = { RESUME: ee },
  { document: z } = K;
function P(f) {
  let n, e, s;
  return (
    (e = new Z({})),
    {
      c() {
        (n = _("div")), S(e.$$.fragment), this.h();
      },
      l(o) {
        n = b(o, "DIV", { class: !0 });
        var r = D(n);
        T(e.$$.fragment, r), r.forEach(d), this.h();
      },
      h() {
        p(n, "class", "flex z-0 opacity-50");
      },
      m(o, r) {
        M(o, n, r), V(e, n, null), (s = !0);
      },
      i(o) {
        s || (v(e.$$.fragment, o), (s = !0));
      },
      o(o) {
        x(e.$$.fragment, o), (s = !1);
      },
      d(o) {
        o && d(n), j(e);
      },
    }
  );
}
function ae(f) {
  let n,
    e,
    s,
    o = 'Download <span class="gradient font-bold">Resume</span>',
    r,
    a,
    c,
    k,
    i,
    B = "Download",
    E,
    C,
    g,
    R,
    I;
  c = new Y({ props: { name: "download", height: "h-40", width: "w-40" } });
  let t = !f[0] && P();
  return {
    c() {
      (n = y()),
        (e = _("div")),
        (s = _("h1")),
        (s.innerHTML = o),
        (r = y()),
        (a = _("div")),
        S(c.$$.fragment),
        (k = y()),
        (i = _("button")),
        (i.textContent = B),
        (E = y()),
        t && t.c(),
        this.h();
    },
    l(l) {
      L("svelte-fayvlo", z.head).forEach(d),
        (n = w(l)),
        (e = b(l, "DIV", { class: !0 }));
      var m = D(e);
      (s = b(m, "H1", { class: !0, "data-svelte-h": !0 })),
        U(s) !== "svelte-1l57z6q" && (s.innerHTML = o),
        (r = w(m)),
        (a = b(m, "DIV", { class: !0 }));
      var $ = D(a);
      T(c.$$.fragment, $),
        (k = w($)),
        (i = b($, "BUTTON", { type: !0, class: !0, "data-svelte-h": !0 })),
        U(i) !== "svelte-1u28461" && (i.textContent = B),
        $.forEach(d),
        (E = w(m)),
        t && t.l(m),
        m.forEach(d),
        this.h();
    },
    h() {
      (z.title = "Pablo Beltran | Resume"),
        p(s, "class", "title text-center z-10"),
        p(i, "type", "button"),
        p(i, "class", "btn variant-filled-primary w-32"),
        p(
          a,
          "class",
          "card card-hover flex flex-col gap-4 justify-center items-center z-10 bg-initial p-4 w-80 h-80",
        ),
        p(
          e,
          "class",
          "flex flex-col gap-4 md:gap-8 py-8 md:py-16 justify-center items-center",
        );
    },
    m(l, h) {
      M(l, n, h),
        M(l, e, h),
        u(e, s),
        u(e, r),
        u(e, a),
        V(c, a, null),
        u(a, k),
        u(a, i),
        u(e, E),
        t && t.m(e, null),
        (g = !0),
        R || ((I = q(i, "click", f[2])), (R = !0));
    },
    p(l, [h]) {
      l[0]
        ? t &&
          (G(),
          x(t, 1, 1, () => {
            t = null;
          }),
          Q())
        : t
          ? h & 1 && v(t, 1)
          : ((t = P()), t.c(), v(t, 1), t.m(e, null));
    },
    i(l) {
      g ||
        (v(c.$$.fragment, l),
        v(t),
        l &&
          (C ||
            A(() => {
              (C = J(e, X, { duration: 1e3 })), C.start();
            })),
        (g = !0));
    },
    o(l) {
      x(c.$$.fragment, l), x(t), (g = !1);
    },
    d(l) {
      l && (d(n), d(e)), j(c), t && t.d(), (R = !1), I();
    },
  };
}
function ne(f, n, e) {
  let s;
  F(f, W, (a) => e(0, (s = a)));
  const o = () => {
    const a = document.createElement("a");
    (a.href = te.RESUME),
      (a.download = "Pablo-Beltran-Resume.pdf"),
      document.body.appendChild(a),
      a.click(),
      document.body.removeChild(a);
  };
  return [s, o, () => o()];
}
class de extends N {
  constructor(n) {
    super(), O(this, n, ne, ae, H, {});
  }
}
export { de as component };
