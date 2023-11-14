let valor = parseInt(input);
let impares = 0;

while (impares < 6) {
  if (valor % 2 !== 0) {
    console.log(valor);
    valor++;
    impares++;
  } else {
    valor++;
  }
}
