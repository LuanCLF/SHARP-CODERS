const numeros = input.split("\n").map((numero) => parseFloat(numero));

numeros.forEach((numero, index) => {
  if (numero <= 10) console.log(`A[${index}] = ${numero.toFixed(1)}`);
});
