const numeros = input.split("\n").map((numero) => parseInt(numero));

let indice = 0;

const maior = numeros.reduce((numeroAtual, proximo, index) => {
  if (numeroAtual < proximo) {
    indice = index + 1;
    numeroAtual = proximo;
  }

  return numeroAtual;
}, 0);

console.log(maior);
console.log(indice);
