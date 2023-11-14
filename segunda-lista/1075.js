const valor = parseInt(input);

for (let i = 0; i < 10000; i++) {
  if (i % valor === 2) console.log(i);
}
