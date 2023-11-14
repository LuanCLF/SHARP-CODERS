const a = lines.shift() * 2;
const b = lines.shift() * 3;
const c = lines.shift() * 5;

const media = (a + b + c) / 10;

console.log(`MEDIA = ${media.toFixed(1)}`);
