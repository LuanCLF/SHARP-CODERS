const salario = parseFloat(lines.shift());

const rendaBaixa = (salario) => {
  const imposto = ((salario - 2000) * 0.8) / 10;
  return imposto;
};

const rendaMedia = (salario) => {
  const imposto = (salario - 3000) * 0.18 + rendaBaixa(3000);
  return imposto;
};

const rendaAlta = (salario) => {
  const imposto = (salario - 4500) * 0.28 + rendaMedia(4500);
  return imposto;
};

if (salario < 2000) {
  console.log("Isento");
} else if (salario < 3000) {
  console.log(`R$ ${rendaBaixa(salario).toFixed(2)}`);
} else if (salario < 4500) {
  console.log(`R$ ${rendaMedia(salario).toFixed(2)}`);
} else {
  console.log(`R$ ${rendaAlta(salario).toFixed(2)}`);
}
