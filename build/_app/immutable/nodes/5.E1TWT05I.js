import {
  s as te,
  p as le,
  e as $,
  a as C,
  t as R,
  b,
  f as T,
  c as D,
  q as H,
  d as m,
  r as Y,
  i as u,
  j as M,
  k as o,
  u as Z,
  v as ne,
  w as re,
  x as ie,
  h as oe,
  g as ce,
  m as fe,
  o as de,
} from "../chunks/scheduler.C-0YFhF0.js";
import {
  S as ae,
  i as se,
  b as K,
  d as V,
  m as O,
  t as I,
  a as A,
  e as Q,
  c as ue,
  g as me,
  f as he,
} from "../chunks/index.ola9ti-H.js";
import { i as _e, f as ge } from "../chunks/mobile.store.D3CH42nr.js";
import { I as pe } from "../chunks/Icon.BHaOAdXx.js";
import { B as ve } from "../chunks/Bubbles.C49S0KwU.js";
import { i as x } from "../chunks/images.H9u0yAjq.js";
function $e(l) {
  let t, e, a, d, r, c, h, k, i, w, g, j, L, N, n, s, p, _, E, B, S;
  g = new pe({ props: { name: "link", width: "w-6", height: "h-6" } });
  const z = l[5].default,
    y = le(z, l, l[4], null);
  return {
    c() {
      (t = $("div")),
        (e = $("img")),
        (d = C()),
        (r = $("div")),
        (c = $("header")),
        (h = $("h3")),
        (k = R(l[1])),
        (i = C()),
        (w = $("a")),
        K(g.$$.fragment),
        (j = C()),
        (L = $("hr")),
        (N = C()),
        (n = $("article")),
        (s = $("p")),
        y && y.c(),
        (p = C()),
        (_ = $("span")),
        (E = R("Completed on: ")),
        (B = R(l[3])),
        this.h();
    },
    l(f) {
      t = b(f, "DIV", { class: !0 });
      var v = T(t);
      (e = b(v, "IMG", { src: !0, alt: !0, class: !0 })),
        (d = D(v)),
        (r = b(v, "DIV", { class: !0 }));
      var P = T(r);
      c = b(P, "HEADER", { class: !0 });
      var q = T(c);
      h = b(q, "H3", { class: !0 });
      var G = T(h);
      (k = H(G, l[1])),
        G.forEach(m),
        (i = D(q)),
        (w = b(q, "A", { href: !0, target: !0, rel: !0 }));
      var U = T(w);
      V(g.$$.fragment, U),
        U.forEach(m),
        q.forEach(m),
        (j = D(P)),
        (L = b(P, "HR", { class: !0 })),
        (N = D(P)),
        (n = b(P, "ARTICLE", {}));
      var W = T(n);
      s = b(W, "P", { class: !0 });
      var X = T(s);
      y && y.l(X),
        X.forEach(m),
        W.forEach(m),
        (p = D(P)),
        (_ = b(P, "SPAN", { class: !0 }));
      var J = T(_);
      (E = H(J, "Completed on: ")),
        (B = H(J, l[3])),
        J.forEach(m),
        P.forEach(m),
        v.forEach(m),
        this.h();
    },
    h() {
      Y(e.src, (a = l[0])) || u(e, "src", a),
        u(e, "alt", l[1]),
        u(e, "class", "bg-black/50 w-full aspect-[11/6] rounded-t-3xl"),
        u(h, "class", "h3 font-semibold leading-loose"),
        u(w, "href", l[2]),
        u(w, "target", "_blank"),
        u(w, "rel", "noopener noreferrer"),
        u(c, "class", "flex justify-between items-center"),
        u(L, "class", "!border-t-2 !border-tertiary-500"),
        u(s, "class", "text-base font-light leading-relaxed"),
        u(_, "class", "font-extralight text-sm text-gray-300 text-end"),
        u(r, "class", "flex flex-col justify-around p-4 gap-4"),
        u(t, "class", "card card-hover bg-initial shadow-sm");
    },
    m(f, v) {
      M(f, t, v),
        o(t, e),
        o(t, d),
        o(t, r),
        o(r, c),
        o(c, h),
        o(h, k),
        o(c, i),
        o(c, w),
        O(g, w, null),
        o(r, j),
        o(r, L),
        o(r, N),
        o(r, n),
        o(n, s),
        y && y.m(s, null),
        o(r, p),
        o(r, _),
        o(_, E),
        o(_, B),
        (S = !0);
    },
    p(f, [v]) {
      (!S || (v & 1 && !Y(e.src, (a = f[0])))) && u(e, "src", a),
        (!S || v & 2) && u(e, "alt", f[1]),
        (!S || v & 2) && Z(k, f[1]),
        (!S || v & 4) && u(w, "href", f[2]),
        y &&
          y.p &&
          (!S || v & 16) &&
          ne(y, z, f, f[4], S ? ie(z, f[4], v, null) : re(f[4]), null),
        (!S || v & 8) && Z(B, f[3]);
    },
    i(f) {
      S || (I(g.$$.fragment, f), I(y, f), (S = !0));
    },
    o(f) {
      A(g.$$.fragment, f), A(y, f), (S = !1);
    },
    d(f) {
      f && m(t), Q(g), y && y.d(f);
    },
  };
}
function be(l, t, e) {
  let { $$slots: a = {}, $$scope: d } = t,
    { image: r } = t,
    { title: c } = t,
    { linkTo: h } = t,
    { date: k } = t;
  return (
    (l.$$set = (i) => {
      "image" in i && e(0, (r = i.image)),
        "title" in i && e(1, (c = i.title)),
        "linkTo" in i && e(2, (h = i.linkTo)),
        "date" in i && e(3, (k = i.date)),
        "$$scope" in i && e(4, (d = i.$$scope));
    }),
    [r, c, h, k, d, a]
  );
}
class F extends ae {
  constructor(t) {
    super(),
      se(this, t, be, $e, te, { image: 0, title: 1, linkTo: 2, date: 3 });
  }
}
function we(l) {
  let t;
  return {
    c() {
      t =
        R(`Developed an intuitive website for an Ecuadorian insurance broker using SvelteKit, with
			seamless deployment on Netlify.`);
    },
    l(e) {
      t = H(
        e,
        `Developed an intuitive website for an Ecuadorian insurance broker using SvelteKit, with
			seamless deployment on Netlify.`,
      );
    },
    m(e, a) {
      M(e, t, a);
    },
    d(e) {
      e && m(t);
    },
  };
}
function Ee(l) {
  let t;
  return {
    c() {
      t =
        R(`Built a robust site for a software development company with SvelteKit, SkeletonDev, Node.js,
			and MySQL, deployed on Netlify.`);
    },
    l(e) {
      t = H(
        e,
        `Built a robust site for a software development company with SvelteKit, SkeletonDev, Node.js,
			and MySQL, deployed on Netlify.`,
      );
    },
    m(e, a) {
      M(e, t, a);
    },
    d(e) {
      e && m(t);
    },
  };
}
function ye(l) {
  let t;
  return {
    c() {
      t =
        R(`Created a dynamic website for an American roofing company with SvelteKit, Node.js, PostgreSQL,
			and Netlify deployment.`);
    },
    l(e) {
      t = H(
        e,
        `Created a dynamic website for an American roofing company with SvelteKit, Node.js, PostgreSQL,
			and Netlify deployment.`,
      );
    },
    m(e, a) {
      M(e, t, a);
    },
    d(e) {
      e && m(t);
    },
  };
}
function ee(l) {
  let t, e, a;
  return (
    (e = new ve({})),
    {
      c() {
        (t = $("div")), K(e.$$.fragment), this.h();
      },
      l(d) {
        t = b(d, "DIV", { class: !0 });
        var r = T(t);
        V(e.$$.fragment, r), r.forEach(m), this.h();
      },
      h() {
        u(t, "class", "flex z-0 opacity-50");
      },
      m(d, r) {
        M(d, t, r), O(e, t, null), (a = !0);
      },
      i(d) {
        a || (I(e.$$.fragment, d), (a = !0));
      },
      o(d) {
        A(e.$$.fragment, d), (a = !1);
      },
      d(d) {
        d && m(t), Q(e);
      },
    }
  );
}
function ke(l) {
  let t,
    e,
    a,
    d = 'Projects <span class="gradient font-bold">Delivered</span>',
    r,
    c,
    h,
    k,
    i,
    w,
    g,
    j,
    L,
    N;
  (h = new F({
    props: {
      image: x.PROJECT_ALTIORE,
      title: "Altiore Fiducia",
      linkTo: "https://altiore-fiducia.netlify.app/",
      date: "May 2025",
      $$slots: { default: [we] },
      $$scope: { ctx: l },
    },
  })),
    (i = new F({
      props: {
        image: x.PROJECT_BELWARE,
        title: "BelwareTech",
        linkTo: "https://belwaretech.com/",
        date: "April 2025",
        $$slots: { default: [Ee] },
        $$scope: { ctx: l },
      },
    })),
    (g = new F({
      props: {
        image: x.PROJECT_BUCCELLI,
        title: "Buccelli Construction",
        linkTo: "https://buccelliconstruction.com/",
        date: "February 2025",
        $$slots: { default: [ye] },
        $$scope: { ctx: l },
      },
    }));
  let n = !l[0] && ee();
  return {
    c() {
      (t = C()),
        (e = $("div")),
        (a = $("h1")),
        (a.innerHTML = d),
        (r = C()),
        (c = $("div")),
        K(h.$$.fragment),
        (k = C()),
        K(i.$$.fragment),
        (w = C()),
        K(g.$$.fragment),
        (j = C()),
        n && n.c(),
        this.h();
    },
    l(s) {
      oe("svelte-g0t8td", document.head).forEach(m),
        (t = D(s)),
        (e = b(s, "DIV", { class: !0 }));
      var _ = T(e);
      (a = b(_, "H1", { class: !0, "data-svelte-h": !0 })),
        ce(a) !== "svelte-1ule1r5" && (a.innerHTML = d),
        (r = D(_)),
        (c = b(_, "DIV", { class: !0 }));
      var E = T(c);
      V(h.$$.fragment, E),
        (k = D(E)),
        V(i.$$.fragment, E),
        (w = D(E)),
        V(g.$$.fragment, E),
        E.forEach(m),
        (j = D(_)),
        n && n.l(_),
        _.forEach(m),
        this.h();
    },
    h() {
      (document.title = "Pablo Beltran | Projects"),
        u(a, "class", "title text-center z-10"),
        u(c, "class", "grid grid-cols-1 md:grid-cols-3 gap-8 z-10"),
        u(e, "class", "flex flex-col gap-4 md:gap-8 py-8 md:py-16");
    },
    m(s, p) {
      M(s, t, p),
        M(s, e, p),
        o(e, a),
        o(e, r),
        o(e, c),
        O(h, c, null),
        o(c, k),
        O(i, c, null),
        o(c, w),
        O(g, c, null),
        o(e, j),
        n && n.m(e, null),
        (N = !0);
    },
    p(s, [p]) {
      const _ = {};
      p & 2 && (_.$$scope = { dirty: p, ctx: s }), h.$set(_);
      const E = {};
      p & 2 && (E.$$scope = { dirty: p, ctx: s }), i.$set(E);
      const B = {};
      p & 2 && (B.$$scope = { dirty: p, ctx: s }),
        g.$set(B),
        s[0]
          ? n &&
            (me(),
            A(n, 1, 1, () => {
              n = null;
            }),
            ue())
          : n
            ? p & 1 && I(n, 1)
            : ((n = ee()), n.c(), I(n, 1), n.m(e, null));
    },
    i(s) {
      N ||
        (I(h.$$.fragment, s),
        I(i.$$.fragment, s),
        I(g.$$.fragment, s),
        I(n),
        s &&
          (L ||
            fe(() => {
              (L = he(e, ge, { duration: 1e3 })), L.start();
            })),
        (N = !0));
    },
    o(s) {
      A(h.$$.fragment, s),
        A(i.$$.fragment, s),
        A(g.$$.fragment, s),
        A(n),
        (N = !1);
    },
    d(s) {
      s && (m(t), m(e)), Q(h), Q(i), Q(g), n && n.d();
    },
  };
}
function Se(l, t, e) {
  let a;
  return de(l, _e, (d) => e(0, (a = d))), [a];
}
class Pe extends ae {
  constructor(t) {
    super(), se(this, t, Se, ke, te, {});
  }
}
export { Pe as component };
