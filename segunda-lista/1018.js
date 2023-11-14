let valor = parseInt(input);
console.log(valor);

const notas = [100, 50, 20, 10, 5, 2, 1];
let notasUsadas = [0, 0, 0, 0, 0, 0, 0];

notas.forEach((nota, index) => {
  while (nota <= valor) {
    notasUsadas[index] += 1;

    if (valor === 0) break;

    valor -= nota;
  }
});

notasUsadas.forEach((usada, index) => {
  console.log(`${usada} nota(s) de R$ ${notas[index]},00`);
});
