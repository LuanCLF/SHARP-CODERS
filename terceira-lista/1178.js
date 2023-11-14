const numero = parseFloat(input);

const vetor = [numero];

for (let i = 0; i < 100; i++) {
  vetor.push(vetor[i] / 2);
  const numeroVetor = vetor[i].toLocaleString("en-US", {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4,
    useGrouping: false,
  });

  console.log(`N[${i}] = ${numeroVetor}`);
}
