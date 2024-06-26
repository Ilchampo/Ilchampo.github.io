const __vite__fileDeps = [
    "../nodes/0.Bxs5dzlW.js",
    "../chunks/scheduler.C-0YFhF0.js",
    "../chunks/index.ola9ti-H.js",
    "../chunks/index.BqH4I7s2.js",
    "../chunks/mobile.store.D3CH42nr.js",
    "../chunks/globals.D0QH3NT1.js",
    "../chunks/entry.DYimn2_3.js",
    "../chunks/Icon.BHaOAdXx.js",
    "../assets/0.WXz_qCQF.css",
    "../nodes/1.CSm0S7IG.js",
    "../chunks/images.H9u0yAjq.js",
    "../nodes/2.CPvnxh7X.js",
    "../chunks/Bubbles.C49S0KwU.js",
    "../assets/Bubbles.C5NmNbns.css",
    "../nodes/3.BjPcewkH.js",
    "../chunks/each.D6YF6ztN.js",
    "../nodes/4.dnClg-uc.js",
    "../nodes/5.E1TWT05I.js",
    "../nodes/6.6JpvLCp1.js",
  ],
  __vite__mapDeps = (i) => i.map((i) => __vite__fileDeps[i]);
import {
  s as N,
  a as B,
  A as p,
  c as U,
  j as k,
  d as h,
  H as j,
  I as H,
  e as J,
  b as K,
  f as W,
  i as D,
  J as d,
  t as z,
  q as F,
  u as G,
  K as O,
  L as y,
  M as Q,
} from "../chunks/scheduler.C-0YFhF0.js";
import {
  S as X,
  i as Y,
  a as g,
  c as A,
  t as w,
  g as I,
  b as R,
  d as T,
  m as L,
  e as P,
} from "../chunks/index.ola9ti-H.js";
const Z = "modulepreload",
  M = function (a, e) {
    return new URL(a, e).href;
  },
  V = {},
  E = function (e, n, i) {
    let r = Promise.resolve();
    if (n && n.length > 0) {
      const _ = document.getElementsByTagName("link"),
        t = document.querySelector("meta[property=csp-nonce]"),
        s =
          (t == null ? void 0 : t.nonce) ||
          (t == null ? void 0 : t.getAttribute("nonce"));
      r = Promise.all(
        n.map((o) => {
          if (((o = M(o, i)), o in V)) return;
          V[o] = !0;
          const c = o.endsWith(".css"),
            l = c ? '[rel="stylesheet"]' : "";
          if (!!i)
            for (let b = _.length - 1; b >= 0; b--) {
              const v = _[b];
              if (v.href === o && (!c || v.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${o}"]${l}`)) return;
          const u = document.createElement("link");
          if (
            ((u.rel = c ? "stylesheet" : Z),
            c || ((u.as = "script"), (u.crossOrigin = "")),
            (u.href = o),
            s && u.setAttribute("nonce", s),
            document.head.appendChild(u),
            c)
          )
            return new Promise((b, v) => {
              u.addEventListener("load", b),
                u.addEventListener("error", () =>
                  v(new Error(`Unable to preload CSS for ${o}`)),
                );
            });
        }),
      );
    }
    return r
      .then(() => e())
      .catch((_) => {
        const t = new Event("vite:preloadError", { cancelable: !0 });
        if (((t.payload = _), window.dispatchEvent(t), !t.defaultPrevented))
          throw _;
      });
  },
  se = {};
function $(a) {
  let e, n, i;
  var r = a[1][0];
  function _(t, s) {
    return { props: { data: t[3], form: t[2] } };
  }
  return (
    r && ((e = y(r, _(a))), a[12](e)),
    {
      c() {
        e && R(e.$$.fragment), (n = p());
      },
      l(t) {
        e && T(e.$$.fragment, t), (n = p());
      },
      m(t, s) {
        e && L(e, t, s), k(t, n, s), (i = !0);
      },
      p(t, s) {
        if (s & 2 && r !== (r = t[1][0])) {
          if (e) {
            I();
            const o = e;
            g(o.$$.fragment, 1, 0, () => {
              P(o, 1);
            }),
              A();
          }
          r
            ? ((e = y(r, _(t))),
              t[12](e),
              R(e.$$.fragment),
              w(e.$$.fragment, 1),
              L(e, n.parentNode, n))
            : (e = null);
        } else if (r) {
          const o = {};
          s & 8 && (o.data = t[3]), s & 4 && (o.form = t[2]), e.$set(o);
        }
      },
      i(t) {
        i || (e && w(e.$$.fragment, t), (i = !0));
      },
      o(t) {
        e && g(e.$$.fragment, t), (i = !1);
      },
      d(t) {
        t && h(n), a[12](null), e && P(e, t);
      },
    }
  );
}
function x(a) {
  let e, n, i;
  var r = a[1][0];
  function _(t, s) {
    return {
      props: { data: t[3], $$slots: { default: [ee] }, $$scope: { ctx: t } },
    };
  }
  return (
    r && ((e = y(r, _(a))), a[11](e)),
    {
      c() {
        e && R(e.$$.fragment), (n = p());
      },
      l(t) {
        e && T(e.$$.fragment, t), (n = p());
      },
      m(t, s) {
        e && L(e, t, s), k(t, n, s), (i = !0);
      },
      p(t, s) {
        if (s & 2 && r !== (r = t[1][0])) {
          if (e) {
            I();
            const o = e;
            g(o.$$.fragment, 1, 0, () => {
              P(o, 1);
            }),
              A();
          }
          r
            ? ((e = y(r, _(t))),
              t[11](e),
              R(e.$$.fragment),
              w(e.$$.fragment, 1),
              L(e, n.parentNode, n))
            : (e = null);
        } else if (r) {
          const o = {};
          s & 8 && (o.data = t[3]),
            s & 8215 && (o.$$scope = { dirty: s, ctx: t }),
            e.$set(o);
        }
      },
      i(t) {
        i || (e && w(e.$$.fragment, t), (i = !0));
      },
      o(t) {
        e && g(e.$$.fragment, t), (i = !1);
      },
      d(t) {
        t && h(n), a[11](null), e && P(e, t);
      },
    }
  );
}
function ee(a) {
  let e, n, i;
  var r = a[1][1];
  function _(t, s) {
    return { props: { data: t[4], form: t[2] } };
  }
  return (
    r && ((e = y(r, _(a))), a[10](e)),
    {
      c() {
        e && R(e.$$.fragment), (n = p());
      },
      l(t) {
        e && T(e.$$.fragment, t), (n = p());
      },
      m(t, s) {
        e && L(e, t, s), k(t, n, s), (i = !0);
      },
      p(t, s) {
        if (s & 2 && r !== (r = t[1][1])) {
          if (e) {
            I();
            const o = e;
            g(o.$$.fragment, 1, 0, () => {
              P(o, 1);
            }),
              A();
          }
          r
            ? ((e = y(r, _(t))),
              t[10](e),
              R(e.$$.fragment),
              w(e.$$.fragment, 1),
              L(e, n.parentNode, n))
            : (e = null);
        } else if (r) {
          const o = {};
          s & 16 && (o.data = t[4]), s & 4 && (o.form = t[2]), e.$set(o);
        }
      },
      i(t) {
        i || (e && w(e.$$.fragment, t), (i = !0));
      },
      o(t) {
        e && g(e.$$.fragment, t), (i = !1);
      },
      d(t) {
        t && h(n), a[10](null), e && P(e, t);
      },
    }
  );
}
function S(a) {
  let e,
    n = a[6] && q(a);
  return {
    c() {
      (e = J("div")), n && n.c(), this.h();
    },
    l(i) {
      e = K(i, "DIV", {
        id: !0,
        "aria-live": !0,
        "aria-atomic": !0,
        style: !0,
      });
      var r = W(e);
      n && n.l(r), r.forEach(h), this.h();
    },
    h() {
      D(e, "id", "svelte-announcer"),
        D(e, "aria-live", "assertive"),
        D(e, "aria-atomic", "true"),
        d(e, "position", "absolute"),
        d(e, "left", "0"),
        d(e, "top", "0"),
        d(e, "clip", "rect(0 0 0 0)"),
        d(e, "clip-path", "inset(50%)"),
        d(e, "overflow", "hidden"),
        d(e, "white-space", "nowrap"),
        d(e, "width", "1px"),
        d(e, "height", "1px");
    },
    m(i, r) {
      k(i, e, r), n && n.m(e, null);
    },
    p(i, r) {
      i[6]
        ? n
          ? n.p(i, r)
          : ((n = q(i)), n.c(), n.m(e, null))
        : n && (n.d(1), (n = null));
    },
    d(i) {
      i && h(e), n && n.d();
    },
  };
}
function q(a) {
  let e;
  return {
    c() {
      e = z(a[7]);
    },
    l(n) {
      e = F(n, a[7]);
    },
    m(n, i) {
      k(n, e, i);
    },
    p(n, i) {
      i & 128 && G(e, n[7]);
    },
    d(n) {
      n && h(e);
    },
  };
}
function te(a) {
  let e, n, i, r, _;
  const t = [x, $],
    s = [];
  function o(l, m) {
    return l[1][1] ? 0 : 1;
  }
  (e = o(a)), (n = s[e] = t[e](a));
  let c = a[5] && S(a);
  return {
    c() {
      n.c(), (i = B()), c && c.c(), (r = p());
    },
    l(l) {
      n.l(l), (i = U(l)), c && c.l(l), (r = p());
    },
    m(l, m) {
      s[e].m(l, m), k(l, i, m), c && c.m(l, m), k(l, r, m), (_ = !0);
    },
    p(l, [m]) {
      let u = e;
      (e = o(l)),
        e === u
          ? s[e].p(l, m)
          : (I(),
            g(s[u], 1, 1, () => {
              s[u] = null;
            }),
            A(),
            (n = s[e]),
            n ? n.p(l, m) : ((n = s[e] = t[e](l)), n.c()),
            w(n, 1),
            n.m(i.parentNode, i)),
        l[5]
          ? c
            ? c.p(l, m)
            : ((c = S(l)), c.c(), c.m(r.parentNode, r))
          : c && (c.d(1), (c = null));
    },
    i(l) {
      _ || (w(n), (_ = !0));
    },
    o(l) {
      g(n), (_ = !1);
    },
    d(l) {
      l && (h(i), h(r)), s[e].d(l), c && c.d(l);
    },
  };
}
function ne(a, e, n) {
  let { stores: i } = e,
    { page: r } = e,
    { constructors: _ } = e,
    { components: t = [] } = e,
    { form: s } = e,
    { data_0: o = null } = e,
    { data_1: c = null } = e;
  j(i.page.notify);
  let l = !1,
    m = !1,
    u = null;
  H(() => {
    const f = i.page.subscribe(() => {
      l &&
        (n(6, (m = !0)),
        Q().then(() => {
          n(7, (u = document.title || "untitled page"));
        }));
    });
    return n(5, (l = !0)), f;
  });
  function b(f) {
    O[f ? "unshift" : "push"](() => {
      (t[1] = f), n(0, t);
    });
  }
  function v(f) {
    O[f ? "unshift" : "push"](() => {
      (t[0] = f), n(0, t);
    });
  }
  function C(f) {
    O[f ? "unshift" : "push"](() => {
      (t[0] = f), n(0, t);
    });
  }
  return (
    (a.$$set = (f) => {
      "stores" in f && n(8, (i = f.stores)),
        "page" in f && n(9, (r = f.page)),
        "constructors" in f && n(1, (_ = f.constructors)),
        "components" in f && n(0, (t = f.components)),
        "form" in f && n(2, (s = f.form)),
        "data_0" in f && n(3, (o = f.data_0)),
        "data_1" in f && n(4, (c = f.data_1));
    }),
    (a.$$.update = () => {
      a.$$.dirty & 768 && i.page.set(r);
    }),
    [t, _, s, o, c, l, m, u, i, r, b, v, C]
  );
}
class oe extends X {
  constructor(e) {
    super(),
      Y(this, e, ne, te, N, {
        stores: 8,
        page: 9,
        constructors: 1,
        components: 0,
        form: 2,
        data_0: 3,
        data_1: 4,
      });
  }
}
const ae = [
    () =>
      E(
        () => import("../nodes/0.Bxs5dzlW.js"),
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
        import.meta.url,
      ),
    () =>
      E(
        () => import("../nodes/1.CSm0S7IG.js"),
        __vite__mapDeps([9, 1, 2, 6, 3, 10]),
        import.meta.url,
      ),
    () =>
      E(
        () => import("../nodes/2.CPvnxh7X.js"),
        __vite__mapDeps([11, 1, 2, 4, 3, 12, 13]),
        import.meta.url,
      ),
    () =>
      E(
        () => import("../nodes/3.BjPcewkH.js"),
        __vite__mapDeps([14, 1, 2, 4, 3, 15, 10, 12, 13]),
        import.meta.url,
      ),
    () =>
      E(
        () => import("../nodes/4.dnClg-uc.js"),
        __vite__mapDeps([16, 1, 2, 4, 3, 15, 7, 10, 12, 13]),
        import.meta.url,
      ),
    () =>
      E(
        () => import("../nodes/5.E1TWT05I.js"),
        __vite__mapDeps([17, 1, 2, 4, 3, 7, 12, 13, 10]),
        import.meta.url,
      ),
    () =>
      E(
        () => import("../nodes/6.6JpvLCp1.js"),
        __vite__mapDeps([18, 1, 2, 5, 4, 3, 7, 12, 13]),
        import.meta.url,
      ),
  ],
  le = [],
  ce = {
    "/": [2],
    "/education": [3],
    "/experience": [4],
    "/projects": [5],
    "/resume": [6],
  },
  fe = {
    handleError: ({ error: a }) => {
      console.error(a);
    },
    reroute: () => {},
  };
export {
  ce as dictionary,
  fe as hooks,
  se as matchers,
  ae as nodes,
  oe as root,
  le as server_loads,
};
