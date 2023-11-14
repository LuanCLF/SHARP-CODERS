const coluna = parseInt(lines.shift());
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
for (let i = 0; i < 12; i++) {
  soma += numeros[i][coluna];
}

const media = soma / 12;

if (funcao === "S") console.log(soma.toFixed(1));
if (funcao === "M") console.log(media.toFixed(1));
