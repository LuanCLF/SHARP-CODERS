const a = parseInt(lines.shift());
const b = parseInt(lines.shift());
const c = parseInt(lines.shift());

const maiorAeB = (a + b + Math.abs(a - b)) / 2;

const maiorDeTodos = (c + maiorAeB + Math.abs(c - maiorAeB)) / 2;

console.log(`${maiorDeTodos} eh o maior`);
