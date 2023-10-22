const numeroDoFuncionario = lines.shift();
const horasTrabalhadas = lines.shift();
const valorPorHora = lines.shift();

const salario = horasTrabalhadas * valorPorHora;

console.log(
  `NUMBER = ${numeroDoFuncionario}\nSALARY = U$ ${salario.toFixed(2)}`
);
