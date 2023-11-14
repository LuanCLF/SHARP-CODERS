let positivos = 0;
let soma = 0;

lines.forEach((numero) => {
  if (parseFloat(numero) > 0) {
    positivos++;
    soma += parseFloat(numero);
  }
});

console.log(`${positivos} valores positivos`);
console.log((soma / positivos).toFixed(1));
