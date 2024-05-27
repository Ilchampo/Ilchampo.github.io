function N() {}
const Y = (t) => t;
function H(t, e) {
  for (const n in e) t[n] = e[n];
  return t;
}
function P(t) {
  return t();
}
function Z() {
  return Object.create(null);
}
function B(t) {
  t.forEach(P);
}
function L(t) {
  return typeof t == "function";
}
function $(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == "object") || typeof t == "function";
}
let m;
function tt(t, e) {
  return t === e
    ? !0
    : (m || (m = document.createElement("a")), (m.href = e), t === m.href);
}
function et(t) {
  return Object.keys(t).length === 0;
}
function A(t, ...e) {
  if (t == null) {
    for (const r of e) r(void 0);
    return N;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function nt(t) {
  let e;
  return A(t, (n) => (e = n))(), e;
}
function rt(t, e, n) {
  t.$$.on_destroy.push(A(e, n));
}
function it(t, e, n, r) {
  if (t) {
    const i = C(t, e, n, r);
    return t[0](i);
  }
}
function C(t, e, n, r) {
  return t[1] && r ? H(n.ctx.slice(), t[1](r(e))) : n.ctx;
}
function ct(t, e, n, r) {
  if (t[2] && r) {
    const i = t[2](r(n));
    if (e.dirty === void 0) return i;
    if (typeof i == "object") {
      const o = [],
        c = Math.max(e.dirty.length, i.length);
      for (let l = 0; l < c; l += 1) o[l] = e.dirty[l] | i[l];
      return o;
    }
    return e.dirty | i;
  }
  return e.dirty;
}
function st(t, e, n, r, i, o) {
  if (i) {
    const c = C(e, n, r, o);
    t.p(c, i);
  }
}
function lt(t) {
  if (t.ctx.length > 32) {
    const e = [],
      n = t.ctx.length / 32;
    for (let r = 0; r < n; r++) e[r] = -1;
    return e;
  }
  return -1;
}
function ot(t) {
  const e = {};
  for (const n in t) n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function ut(t) {
  const e = {};
  for (const n in t) e[n] = !0;
  return e;
}
function at(t) {
  return t && L(t.destroy) ? t.destroy : N;
}
function ft(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [t, "px"];
}
let y = !1;
function _t() {
  y = !0;
}
function dt() {
  y = !1;
}
function M(t, e, n, r) {
  for (; t < e; ) {
    const i = t + ((e - t) >> 1);
    n(i) <= r ? (t = i + 1) : (e = i);
  }
  return t;
}
function O(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === "HEAD") {
    const s = [];
    for (let u = 0; u < e.length; u++) {
      const a = e[u];
      a.claim_order !== void 0 && s.push(a);
    }
    e = s;
  }
  const n = new Int32Array(e.length + 1),
    r = new Int32Array(e.length);
  n[0] = -1;
  let i = 0;
  for (let s = 0; s < e.length; s++) {
    const u = e[s].claim_order,
      a =
        (i > 0 && e[n[i]].claim_order <= u
          ? i + 1
          : M(1, i, (q) => e[n[q]].claim_order, u)) - 1;
    r[s] = n[a] + 1;
    const E = a + 1;
    (n[E] = s), (i = Math.max(E, i));
  }
  const o = [],
    c = [];
  let l = e.length - 1;
  for (let s = n[i] + 1; s != 0; s = r[s - 1]) {
    for (o.push(e[s - 1]); l >= s; l--) c.push(e[l]);
    l--;
  }
  for (; l >= 0; l--) c.push(e[l]);
  o.reverse(), c.sort((s, u) => s.claim_order - u.claim_order);
  for (let s = 0, u = 0; s < c.length; s++) {
    for (; u < o.length && c[s].claim_order >= o[u].claim_order; ) u++;
    const a = u < o.length ? o[u] : null;
    t.insertBefore(c[s], a);
  }
}
function R(t, e) {
  t.appendChild(e);
}
function F(t) {
  if (!t) return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function ht(t) {
  const e = j("style");
  return (e.textContent = "/* empty */"), z(F(t), e), e.sheet;
}
function z(t, e) {
  return R(t.head || t, e), e.sheet;
}
function I(t, e) {
  if (y) {
    for (
      O(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null &&
            t.actual_end_child.parentNode !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child
      ? (e.claim_order !== void 0 || e.parentNode !== t) &&
        t.insertBefore(e, t.actual_end_child)
      : (t.actual_end_child = e.nextSibling);
  } else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function mt(t, e, n) {
  y && !n
    ? I(t, e)
    : (e.parentNode !== t || e.nextSibling != n) &&
      t.insertBefore(e, n || null);
}
function pt(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function yt(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function j(t) {
  return document.createElement(t);
}
function U(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function v(t) {
  return document.createTextNode(t);
}
function bt() {
  return v(" ");
}
function gt() {
  return v("");
}
function xt(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function vt(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Et(t) {
  return t.dataset.svelteH;
}
function wt(t) {
  return Array.from(t.childNodes);
}
function W(t) {
  t.claim_info === void 0 &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function D(t, e, n, r, i = !1) {
  W(t);
  const o = (() => {
    for (let c = t.claim_info.last_index; c < t.length; c++) {
      const l = t[c];
      if (e(l)) {
        const s = n(l);
        return (
          s === void 0 ? t.splice(c, 1) : (t[c] = s),
          i || (t.claim_info.last_index = c),
          l
        );
      }
    }
    for (let c = t.claim_info.last_index - 1; c >= 0; c--) {
      const l = t[c];
      if (e(l)) {
        const s = n(l);
        return (
          s === void 0 ? t.splice(c, 1) : (t[c] = s),
          i
            ? s === void 0 && t.claim_info.last_index--
            : (t.claim_info.last_index = c),
          l
        );
      }
    }
    return r();
  })();
  return (
    (o.claim_order = t.claim_info.total_claimed),
    (t.claim_info.total_claimed += 1),
    o
  );
}
function S(t, e, n, r) {
  return D(
    t,
    (i) => i.nodeName === e,
    (i) => {
      const o = [];
      for (let c = 0; c < i.attributes.length; c++) {
        const l = i.attributes[c];
        n[l.name] || o.push(l.name);
      }
      o.forEach((c) => i.removeAttribute(c));
    },
    () => r(e),
  );
}
function kt(t, e, n) {
  return S(t, e, n, j);
}
function Nt(t, e, n) {
  return S(t, e, n, U);
}
function G(t, e) {
  return D(
    t,
    (n) => n.nodeType === 3,
    (n) => {
      const r = "" + e;
      if (n.data.startsWith(r)) {
        if (n.data.length !== r.length) return n.splitText(r.length);
      } else n.data = r;
    },
    () => v(e),
    !0,
  );
}
function At(t) {
  return G(t, " ");
}
function Ct(t, e) {
  (e = "" + e), t.data !== e && (t.data = e);
}
function jt(t, e, n, r) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, "");
}
function Dt(t, e, n) {
  t.classList.toggle(e, !!n);
}
function J(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: r });
}
function St(t, e) {
  const n = [];
  let r = 0;
  for (const i of e.childNodes)
    if (i.nodeType === 8) {
      const o = i.textContent.trim();
      o === `HEAD_${t}_END`
        ? ((r -= 1), n.push(i))
        : o === `HEAD_${t}_START` && ((r += 1), n.push(i));
    } else r > 0 && n.push(i);
  return n;
}
function Tt(t, e) {
  return new t(e);
}
let p;
function b(t) {
  p = t;
}
function h() {
  if (!p) throw new Error("Function called outside component initialization");
  return p;
}
function qt(t) {
  h().$$.on_mount.push(t);
}
function Ht(t) {
  h().$$.after_update.push(t);
}
function Pt() {
  const t = h();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const i = t.$$.callbacks[e];
    if (i) {
      const o = J(e, n, { cancelable: r });
      return (
        i.slice().forEach((c) => {
          c.call(t, o);
        }),
        !o.defaultPrevented
      );
    }
    return !0;
  };
}
function Bt(t, e) {
  return h().$$.context.set(t, e), e;
}
function Lt(t) {
  return h().$$.context.get(t);
}
function Mt(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((r) => r.call(this, e));
}
const d = [],
  w = [];
let _ = [];
const k = [],
  T = Promise.resolve();
let x = !1;
function K() {
  x || ((x = !0), T.then(V));
}
function Ot() {
  return K(), T;
}
function Q(t) {
  _.push(t);
}
const g = new Set();
let f = 0;
function V() {
  if (f !== 0) return;
  const t = p;
  do {
    try {
      for (; f < d.length; ) {
        const e = d[f];
        f++, b(e), X(e.$$);
      }
    } catch (e) {
      throw ((d.length = 0), (f = 0), e);
    }
    for (b(null), d.length = 0, f = 0; w.length; ) w.pop()();
    for (let e = 0; e < _.length; e += 1) {
      const n = _[e];
      g.has(n) || (g.add(n), n());
    }
    _.length = 0;
  } while (d.length);
  for (; k.length; ) k.pop()();
  (x = !1), g.clear(), b(t);
}
function X(t) {
  if (t.fragment !== null) {
    t.update(), B(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(Q);
  }
}
function Rt(t) {
  const e = [],
    n = [];
  _.forEach((r) => (t.indexOf(r) === -1 ? e.push(r) : n.push(r))),
    n.forEach((r) => r()),
    (_ = e);
}
export {
  _t as $,
  gt as A,
  Nt as B,
  ut as C,
  H as D,
  ot as E,
  Y as F,
  ft as G,
  Ht as H,
  qt as I,
  jt as J,
  w as K,
  Tt as L,
  Ot as M,
  F as N,
  ht as O,
  B as P,
  L as Q,
  J as R,
  Z as S,
  V as T,
  et as U,
  Rt as V,
  p as W,
  b as X,
  P as Y,
  d as Z,
  K as _,
  bt as a,
  dt as a0,
  Bt as a1,
  Lt as a2,
  nt as a3,
  Mt as a4,
  Dt as a5,
  Pt as a6,
  at as a7,
  kt as b,
  At as c,
  pt as d,
  j as e,
  wt as f,
  Et as g,
  St as h,
  vt as i,
  mt as j,
  I as k,
  xt as l,
  Q as m,
  N as n,
  rt as o,
  it as p,
  G as q,
  tt as r,
  $ as s,
  v as t,
  Ct as u,
  st as v,
  lt as w,
  ct as x,
  yt as y,
  U as z,
};
