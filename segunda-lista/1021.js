let valor = parseFloat(input);

const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

console.log("NOTAS:");
notas.forEach((nota) => {
  const totalNotas = parseInt(valor / nota);
  console.log(`${totalNotas} nota(s) de R$ ${nota.toFixed(2)}`);
  valor = valor % nota;
});

console.log("MOEDAS:");
moedas.forEach((moeda) => {
  const totalMoedas = parseInt(valor / moeda);
  console.log(`${totalMoedas} moeda(s) de R$ ${moeda.toFixed(2)}`);
  valor = (valor % moeda) + 0.00001;
});
