const numeros = input.split("\n").map((numero) => parseInt(numero));
const reverso = numeros.reverse();

reverso.forEach((numero, index) => {
  console.log(`N[${index}] = ${numero}`);
});
