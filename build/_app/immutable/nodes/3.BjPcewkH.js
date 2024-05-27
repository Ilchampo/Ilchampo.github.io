import {
  s as ne,
  p as de,
  e as v,
  a as S,
  t as P,
  b,
  f as A,
  c as I,
  q as N,
  d as _,
  r as Y,
  i as h,
  j,
  k as o,
  u as z,
  v as fe,
  w as ue,
  x as he,
  y as me,
  h as ge,
  g as q,
  m as _e,
  o as pe,
  n as re,
} from "../chunks/scheduler.C-0YFhF0.js";
import {
  S as oe,
  i as ce,
  t as V,
  a as B,
  b as J,
  d as O,
  m as G,
  c as ve,
  e as Z,
  g as be,
  f as Ee,
} from "../chunks/index.ola9ti-H.js";
import { i as we, f as Ce } from "../chunks/mobile.store.D3CH42nr.js";
import { e as ee } from "../chunks/each.D6YF6ztN.js";
import { i as te } from "../chunks/images.H9u0yAjq.js";
import { B as Te } from "../chunks/Bubbles.C49S0KwU.js";
function le(i, e, t) {
  const l = i.slice();
  return (l[7] = e[t]), l;
}
function se(i) {
  let e,
    t = i[7] + "",
    l;
  return {
    c() {
      (e = v("span")), (l = P(t)), this.h();
    },
    l(s) {
      e = b(s, "SPAN", { class: !0 });
      var d = A(e);
      (l = N(d, t)), d.forEach(_), this.h();
    },
    h() {
      h(e, "class", "badge variant-ringed-primary");
    },
    m(s, d) {
      j(s, e, d), o(e, l);
    },
    p(s, d) {
      d & 16 && t !== (t = s[7] + "") && z(l, t);
    },
    d(s) {
      s && _(e);
    },
  };
}
function ke(i) {
  let e, t, l, s, d, f, E, x, M, n, T, H, C, y, $, D, c, r, m;
  const k = i[6].default,
    g = de(k, i, i[5], null);
  let L = ee(i[4]),
    w = [];
  for (let a = 0; a < L.length; a += 1) w[a] = se(le(i, L, a));
  return {
    c() {
      (e = v("div")),
        (t = v("div")),
        (l = v("img")),
        (d = S()),
        (f = v("div")),
        (E = v("h3")),
        (x = P(i[1])),
        (M = S()),
        (n = v("h4")),
        (T = P(i[2])),
        (H = S()),
        (C = v("span")),
        (y = P(i[3])),
        ($ = S()),
        (D = v("div")),
        g && g.c(),
        (c = S()),
        (r = v("div"));
      for (let a = 0; a < w.length; a += 1) w[a].c();
      this.h();
    },
    l(a) {
      e = b(a, "DIV", { class: !0 });
      var p = A(e);
      t = b(p, "DIV", { class: !0 });
      var u = A(t);
      (l = b(u, "IMG", { src: !0, alt: !0, class: !0 })),
        (d = I(u)),
        (f = b(u, "DIV", { class: !0 }));
      var U = A(f);
      E = b(U, "H3", { class: !0 });
      var K = A(E);
      (x = N(K, i[1])),
        K.forEach(_),
        (M = I(U)),
        (n = b(U, "H4", { class: !0 }));
      var Q = A(n);
      (T = N(Q, i[2])),
        Q.forEach(_),
        (H = I(U)),
        (C = b(U, "SPAN", { class: !0 }));
      var R = A(C);
      (y = N(R, i[3])),
        R.forEach(_),
        U.forEach(_),
        u.forEach(_),
        ($ = I(p)),
        (D = b(p, "DIV", { class: !0 }));
      var W = A(D);
      g && g.l(W), W.forEach(_), (c = I(p)), (r = b(p, "DIV", { class: !0 }));
      var X = A(r);
      for (let F = 0; F < w.length; F += 1) w[F].l(X);
      X.forEach(_), p.forEach(_), this.h();
    },
    h() {
      Y(l.src, (s = i[0])) || h(l, "src", s),
        h(l, "alt", i[2]),
        h(l, "class", "w-16 h-16 rounded-2xl self-start md:self-center"),
        h(E, "class", "h3"),
        h(n, "class", "h4"),
        h(C, "class", "font-light"),
        h(f, "class", "flex flex-col"),
        h(t, "class", "flex gap-4 justify-start items-center"),
        h(
          D,
          "class",
          "flex flex-col leading-relaxed font-light text-sm ml-4 md:ml-24 py-4",
        ),
        h(r, "class", "flex gap-2 my-4 ml-0 md:ml-20 flex-wrap"),
        h(e, "class", "card card-hover bg-initial shadow-sm p-4");
    },
    m(a, p) {
      j(a, e, p),
        o(e, t),
        o(t, l),
        o(t, d),
        o(t, f),
        o(f, E),
        o(E, x),
        o(f, M),
        o(f, n),
        o(n, T),
        o(f, H),
        o(f, C),
        o(C, y),
        o(e, $),
        o(e, D),
        g && g.m(D, null),
        o(e, c),
        o(e, r);
      for (let u = 0; u < w.length; u += 1) w[u] && w[u].m(r, null);
      m = !0;
    },
    p(a, [p]) {
      if (
        ((!m || (p & 1 && !Y(l.src, (s = a[0])))) && h(l, "src", s),
        (!m || p & 4) && h(l, "alt", a[2]),
        (!m || p & 2) && z(x, a[1]),
        (!m || p & 4) && z(T, a[2]),
        (!m || p & 8) && z(y, a[3]),
        g &&
          g.p &&
          (!m || p & 32) &&
          fe(g, k, a, a[5], m ? he(k, a[5], p, null) : ue(a[5]), null),
        p & 16)
      ) {
        L = ee(a[4]);
        let u;
        for (u = 0; u < L.length; u += 1) {
          const U = le(a, L, u);
          w[u] ? w[u].p(U, p) : ((w[u] = se(U)), w[u].c(), w[u].m(r, null));
        }
        for (; u < w.length; u += 1) w[u].d(1);
        w.length = L.length;
      }
    },
    i(a) {
      m || (V(g, a), (m = !0));
    },
    o(a) {
      B(g, a), (m = !1);
    },
    d(a) {
      a && _(e), g && g.d(a), me(w, a);
    },
  };
}
function Ae(i, e, t) {
  let { $$slots: l = {}, $$scope: s } = e,
    { icon: d } = e,
    { degree: f } = e,
    { college: E } = e,
    { duration: x } = e,
    { skills: M } = e;
  return (
    (i.$$set = (n) => {
      "icon" in n && t(0, (d = n.icon)),
        "degree" in n && t(1, (f = n.degree)),
        "college" in n && t(2, (E = n.college)),
        "duration" in n && t(3, (x = n.duration)),
        "skills" in n && t(4, (M = n.skills)),
        "$$scope" in n && t(5, (s = n.$$scope));
    }),
    [d, f, E, x, M, s, l]
  );
}
class ae extends oe {
  constructor(e) {
    super(),
      ce(this, e, Ae, ke, ne, {
        icon: 0,
        degree: 1,
        college: 2,
        duration: 3,
        skills: 4,
      });
  }
}
function De(i) {
  let e,
    t = `<li>Served as a programming tutor for a public school in Zambisa, using Scratch to teach and
						develop students&#39; programming logic.</li> <li>Achieved a score of 9.33/10 on the ABET Capstone Project.</li> <li>Secured 5th place in the UDLA Tech 2019 engineering competition with FastChange, a
						biometric application for train ticket payments.- Achieved a score of 9.33/10 on the
						ABET Capstone Project. - Secured 5th place in the UDLA Tech 2019 engineering competition
						with FastChange, a biometric application for train ticket payments.</li>`;
  return {
    c() {
      (e = v("ul")), (e.innerHTML = t), this.h();
    },
    l(l) {
      (e = b(l, "UL", { class: !0, "data-svelte-h": !0 })),
        q(e) !== "svelte-6ngziv" && (e.innerHTML = t),
        this.h();
    },
    h() {
      h(e, "class", "list-disc");
    },
    m(l, s) {
      j(l, e, s);
    },
    p: re,
    d(l) {
      l && _(e);
    },
  };
}
function Le(i) {
  let e,
    t = `<li>Proposed Talluelo, a website enabling elders and retired individuals to create and guide
						courses, as part of an entrepreneur club initiative.</li> <li>Secured first place in the UTEC Entrepreneurship project with Talluelo.</li> <li>Achieved second place in the Software and Electronics Engineering contest with an
						application designed to manage household electronics via mobile devices.</li>`;
  return {
    c() {
      (e = v("ul")), (e.innerHTML = t), this.h();
    },
    l(l) {
      (e = b(l, "UL", { class: !0, "data-svelte-h": !0 })),
        q(e) !== "svelte-4x9cb8" && (e.innerHTML = t),
        this.h();
    },
    h() {
      h(e, "class", "list-disc");
    },
    m(l, s) {
      j(l, e, s);
    },
    p: re,
    d(l) {
      l && _(e);
    },
  };
}
function ie(i) {
  let e, t, l;
  return (
    (t = new Te({})),
    {
      c() {
        (e = v("div")), J(t.$$.fragment), this.h();
      },
      l(s) {
        e = b(s, "DIV", { class: !0 });
        var d = A(e);
        O(t.$$.fragment, d), d.forEach(_), this.h();
      },
      h() {
        h(e, "class", "flex z-0 opacity-50");
      },
      m(s, d) {
        j(s, e, d), G(t, e, null), (l = !0);
      },
      i(s) {
        l || (V(t.$$.fragment, s), (l = !0));
      },
      o(s) {
        B(t.$$.fragment, s), (l = !1);
      },
      d(s) {
        s && _(e), Z(t);
      },
    }
  );
}
function xe(i) {
  let e,
    t,
    l,
    s = 'Learning <span class="gradient font-bold">Path</span>',
    d,
    f,
    E,
    x =
      '<div class="flex justify-center items-center bg-primary-500 rounded-r-full rounded-l-none md:rounded-full p-2 w-12 h-12">2023</div> <span class="divider-vertical flex-grow !border-r-1 !border-primary-500"></span> <div class="flex justify-center items-center bg-primary-500 rounded-r-full rounded-l-none md:rounded-full p-2 w-12 h-12">2017</div>',
    M,
    n,
    T,
    H,
    C,
    y,
    $,
    D;
  (T = new ae({
    props: {
      icon: te.EDUCATION_UDLA,
      degree: "Bachelor of Engineering - BE, Computer Software Engineering",
      college: "Universidad de Las Américas (EC)",
      duration: "Mar 2019 - Feb 2023",
      skills: [
        "Software Architecture",
        "Scrum",
        "Agile Methodologies",
        "Node.Js",
        "Software Design",
      ],
      $$slots: { default: [De] },
      $$scope: { ctx: i },
    },
  })),
    (C = new ae({
      props: {
        icon: te.EDUCATION_UTEC,
        degree: "Bachelor's degree, Computer Science",
        college: "UTEC - Universidad de Ingeniería y Tecnología",
        duration: "Jan 2017 - Mar 2019",
        skills: [
          "Leadership",
          "Algorithms",
          "Mathematics",
          "Entrepreneurship",
          "Computer Architecture",
        ],
        $$slots: { default: [Le] },
        $$scope: { ctx: i },
      },
    }));
  let c = !i[0] && ie();
  return {
    c() {
      (e = S()),
        (t = v("div")),
        (l = v("h1")),
        (l.innerHTML = s),
        (d = S()),
        (f = v("div")),
        (E = v("div")),
        (E.innerHTML = x),
        (M = S()),
        (n = v("div")),
        J(T.$$.fragment),
        (H = S()),
        J(C.$$.fragment),
        (y = S()),
        c && c.c(),
        this.h();
    },
    l(r) {
      ge("svelte-tkc33l", document.head).forEach(_),
        (e = I(r)),
        (t = b(r, "DIV", { class: !0 }));
      var k = A(t);
      (l = b(k, "H1", { class: !0, "data-svelte-h": !0 })),
        q(l) !== "svelte-19rjwj0" && (l.innerHTML = s),
        (d = I(k)),
        (f = b(k, "DIV", { class: !0 }));
      var g = A(f);
      (E = b(g, "DIV", { class: !0, "data-svelte-h": !0 })),
        q(E) !== "svelte-5pxfht" && (E.innerHTML = x),
        (M = I(g)),
        (n = b(g, "DIV", { class: !0 }));
      var L = A(n);
      O(T.$$.fragment, L),
        (H = I(L)),
        O(C.$$.fragment, L),
        L.forEach(_),
        g.forEach(_),
        (y = I(k)),
        c && c.l(k),
        k.forEach(_),
        this.h();
    },
    h() {
      (document.title = "Pablo Beltran | Education"),
        h(l, "class", "title text-center z-10"),
        h(E, "class", "flex flex-col flex-grow py-2 pr-2 md:pr-0"),
        h(n, "class", "flex flex-col w-[95%] gap-4"),
        h(f, "class", "flex w-full gap-1 md:gap-8 z-10"),
        h(t, "class", "flex flex-col gap-4 md:gap-8 py-8 md:py-16");
    },
    m(r, m) {
      j(r, e, m),
        j(r, t, m),
        o(t, l),
        o(t, d),
        o(t, f),
        o(f, E),
        o(f, M),
        o(f, n),
        G(T, n, null),
        o(n, H),
        G(C, n, null),
        o(t, y),
        c && c.m(t, null),
        (D = !0);
    },
    p(r, [m]) {
      const k = {};
      m & 2 && (k.$$scope = { dirty: m, ctx: r }), T.$set(k);
      const g = {};
      m & 2 && (g.$$scope = { dirty: m, ctx: r }),
        C.$set(g),
        r[0]
          ? c &&
            (be(),
            B(c, 1, 1, () => {
              c = null;
            }),
            ve())
          : c
            ? m & 1 && V(c, 1)
            : ((c = ie()), c.c(), V(c, 1), c.m(t, null));
    },
    i(r) {
      D ||
        (V(T.$$.fragment, r),
        V(C.$$.fragment, r),
        V(c),
        r &&
          ($ ||
            _e(() => {
              ($ = Ee(t, Ce, { duration: 1e3 })), $.start();
            })),
        (D = !0));
    },
    o(r) {
      B(T.$$.fragment, r), B(C.$$.fragment, r), B(c), (D = !1);
    },
    d(r) {
      r && (_(e), _(t)), Z(T), Z(C), c && c.d();
    },
  };
}
function Me(i, e, t) {
  let l;
  return pe(i, we, (s) => t(0, (l = s))), [l];
}
class Ve extends oe {
  constructor(e) {
    super(), ce(this, e, Me, xe, ne, {});
  }
}
export { Ve as component };
