const lines = input.split("\n");
const linhaUm = lines[0];
const numeros = lines[1].split(" ").map((numero) => parseInt(numero));

let indice = 0;
let menor = numeros[0];
for (let i = 0; i < numeros.length; i++) {
  if (menor > numeros[i + 1]) {
    menor = numeros[i + 1];
    indice = i + 1;
  }
}

console.log(`Menor valor: ${menor}`);
console.log(`Posicao: ${indice}`);
