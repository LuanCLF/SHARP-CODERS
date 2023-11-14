let positivos = 0;

lines.forEach((numero) => (parseFloat(numero) > 0 ? positivos++ : false));

console.log(`${positivos} valores positivos`);
