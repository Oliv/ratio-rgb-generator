module.exports = function generate(ratio) {
  let min = 60, max = 220, breakdown = .5, r, g, b = 60;

  let a1 = (() => (max - min) / breakdown)();
  let a2 = (() => (min - a1) / breakdown)();
  let b1 = min;
  let b2 = a1 - (a2 * breakdown);

  let fn1 = x => a1 * x + b1;
  let fn2 = x => a2 * x + b2;

  if (ratio <= breakdown) {
    r = Math.round(fn1(ratio));
    g = max;
  } else {
    r = max;
    g = Math.round(fn2(ratio));
  }

  return `rgb(${r},${g},${b})`;
}
