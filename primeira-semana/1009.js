const nome = lines.shift();
const salario = parseFloat(lines.shift());
const comissao = parseFloat(lines.shift());

const total = salario + comissao * 0.15;

console.log(`TOTAL = R$ ${total.toFixed(2)}`);
