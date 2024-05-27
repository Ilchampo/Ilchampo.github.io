import { F as g, G as u } from "./scheduler.C-0YFhF0.js";
import { w as x } from "./index.BqH4I7s2.js";
function S(t) {
  return t * t * t;
}
function V(t) {
  const n = t - 1;
  return n * n * n + 1;
}
function U(t, { delay: n = 0, duration: o = 400, easing: s = g } = {}) {
  const a = +getComputedStyle(t).opacity;
  return { delay: n, duration: o, easing: s, css: (c) => `opacity: ${c * a}` };
}
function F(
  t,
  {
    delay: n = 0,
    duration: o = 400,
    easing: s = V,
    x: a = 0,
    y: c = 0,
    opacity: f = 0,
  } = {},
) {
  const i = getComputedStyle(t),
    r = +i.opacity,
    l = i.transform === "none" ? "" : i.transform,
    y = r * (1 - f),
    [p, m] = u(a),
    [$, d] = u(c);
  return {
    delay: n,
    duration: o,
    easing: s,
    css: (e, b) => `
			transform: ${l} translate(${(1 - e) * p}${m}, ${(1 - e) * $}${d});
			opacity: ${r - y * b}`,
  };
}
const _ = !1,
  G = x(_);
export { F as a, S as c, U as f, G as i };
