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
for (let i = 0; i < 11; i++) {
  for (let c = coluna; c < 12; c++) {
    soma += numeros[i][c];
  }
  coluna++;
}

const media = soma / 66;

if (funcao === "S") console.log(soma.toFixed(1));
if (funcao === "M") console.log(media.toFixed(1));
