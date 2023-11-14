const valor = parseInt(input);
const vetor = [];
let inserir = 0;

for (let i = 0; i < 1000; i++) {
  vetor.push(inserir);

  inserir++;
  if (inserir === valor) inserir = 0;

  console.log(`N[${i}] = ${vetor[i]}`);
}
