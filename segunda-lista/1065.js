let pares = 0;

lines.forEach((valor) => (parseInt(valor) % 2 === 0 ? pares++ : false));

console.log(`${pares} valores pares`);
