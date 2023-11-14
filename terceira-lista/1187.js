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
let coluna = 1;
let limite = 11;
for (let l = 0; l < 5; l++) {
  for (let c = coluna; c < limite; c++) {
    soma += numeros[l][c];
  }
  coluna++;
  limite--;
}

const media = soma / 30;

if (funcao === "S") console.log(soma.toFixed(1));
if (funcao === "M") console.log(media.toFixed(1));
