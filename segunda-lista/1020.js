let dias = parseInt(input);

const calendario = [365, 30];
const valores = [0, 0];

calendario.forEach((dado, index) => {
  while (dias >= dado) {
    valores[index] += 1;

    dias -= dado;
  }
});

console.log(`${valores[0]} ano(s)`);
console.log(`${valores[1]} mes(es)`);
console.log(`${dias} dia(s)`);
