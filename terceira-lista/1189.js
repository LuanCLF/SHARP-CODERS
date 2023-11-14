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
let linha = 1;
let limite = 11;
for (let c = 0; c < 5; c++) {
  for (let l = linha; l < limite; l++) {
    soma += numeros[l][c];
  }
  linha++;
  limite--;
}

const media = soma / 30;

if (funcao === "S") console.log(soma.toFixed(1));
if (funcao === "M") console.log(media.toFixed(1));
