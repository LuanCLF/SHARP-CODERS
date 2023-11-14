const arrayPecas1 = lines.shift().split(" ");
const arrayPecas2 = lines.shift().split(" ");

const totalPecas1 = Number(arrayPecas1[1]) * Number(arrayPecas1[2]);
const totalPecas2 = Number(arrayPecas2[1]) * Number(arrayPecas2[2]);

const total = totalPecas1 + totalPecas2;

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
