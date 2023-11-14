const funcao = lines.shift();

const numeros = [];

for (let i = 0; i < 12; i++) {
  numeros.push([]);
  for (let j = 0; j < 12; j++) {
    const numero = parseFloat(lines.shift());
    numeros[i].push(numero);
  }
}

let soma = 0;
let linha = 10;
for (let c = 0; c < 11; c++) {
  for (let l = linha; l >= 0; l--) {
    soma += numeros[l][c];
  }
  linha--;
}

const media = soma / 66;

if (funcao === "S") console.log(soma.toFixed(1));
if (funcao === "M") console.log(media.toFixed(1));
