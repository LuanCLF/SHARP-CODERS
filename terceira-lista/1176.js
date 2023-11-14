const lines = input.split("\n").map((numero) => parseInt(numero));

const testes = lines.shift();

lines.forEach((numero) => {
  const fibonacci = [0, 1];

  for (let i = 0; i < numero; i++) {
    const fib = fibonacci[i] + fibonacci[i + 1];
    fibonacci.push(fib);
  }

  console.log(`Fib(${numero}) = ${fibonacci[numero]}`);
});
