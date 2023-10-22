const a = lines.shift();
const b = lines.shift();
const c = lines.shift();
const d = lines.shift();

const primeiroProduto = a * b;
const segundoProduto = c * d;

const diferenca = primeiroProduto - segundoProduto;

console.log(`DIFERENCA = ${diferenca}`);
