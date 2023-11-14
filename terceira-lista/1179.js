const lines = input.split("\n").map((numero) => parseInt(numero));

let par = [];
let impar = [];

function printArray(array, name) {
  for (let j = 0; j < array.length; j++) {
    console.log(`${name}[${j}] = ${array[j]}`);
  }
}

for (let i = 0; i < lines.length; i++) {
  const numero = lines[i];
  if (isNaN(numero)) {
  } else if (numero % 2 === 0) par.push(numero);
  else impar.push(numero);

  if (impar.length === 5) {
    printArray(impar, "impar");
    impar = [];
  }
  if (par.length === 5) {
    printArray(par, "par");
    par = [];
  }
}

if (impar.length > 0) printArray(impar, "impar");
if (par.length > 0) printArray(par, "par");
