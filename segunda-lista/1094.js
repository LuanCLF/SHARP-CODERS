const testes = parseInt(lines.shift());

let c = 0;
let r = 0;
let s = 0;
let total = 0;

for (let i = 0; i < testes; i++) {
  const valor = parseInt(lines[i].split(" ")[0]);
  const cobaia = lines[i].split(" ")[1];

  total += valor;
  switch (cobaia) {
    case "C":
      c += valor;
      break;
    case "R":
      r += valor;
      break;
    case "S":
      s += valor;
      break;
  }
}

console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${c}`);
console.log(`Total de ratos: ${r}`);
console.log(`Total de sapos: ${s}`);
console.log(`Percentual de coelhos: ${((c / total) * 100).toFixed(2)} %`);
console.log(`Percentual de ratos: ${((r / total) * 100).toFixed(2)} %`);
console.log(`Percentual de sapos: ${((s / total) * 100).toFixed(2)} %`);
