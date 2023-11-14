const numeros = input.split("\n").map((numero) => parseInt(numero));

for (let i = 0; i < 10; i++) {
  const numero = numeros[i] < 1 ? 1 : numeros[i];

  console.log(`X[${i}] = ${numero}`);
}
  