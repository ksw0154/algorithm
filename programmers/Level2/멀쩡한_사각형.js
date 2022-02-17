const width = 8;
const height = 12;

function getGCD(w, h) {
  const mod = w % h;

  if (mod === 0) {
    return h;
  }

  return getGCD(h, mod);
}

function solution(w, h) {
  const gcd = getGCD(w, h);

  return w * h - (w + h - gcd);
}

console.log(solution(width, height));
