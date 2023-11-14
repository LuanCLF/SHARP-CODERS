const x = parseInt(lines.shift());
const y = parseInt(lines.shift());

let soma = 0;

const menor = x < y ? x : y;
const maior = x > y ? x : y;

for (let i = menor; i <= maior; i++) {
  if (i % 13 !== 0) {
    soma += i;
  }
}

console.log(soma);
