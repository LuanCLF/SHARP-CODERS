const valores = input.split("\n").map((numero) => parseInt(numero));

const testes = valores.shift();

for (let i = 0; i < testes; i++) {
  const valor = valores[i];
  let mensagem = "";

  switch (valor) {
    case 0:
      mensagem += "NULL";
      break;
    default:
      if (valor % 2 === 0) {
        mensagem += "EVEN";
      } else {
        mensagem += "ODD";
      }

      if (valor > 0) {
        mensagem += " POSITIVE";
      } else {
        mensagem += " NEGATIVE";
      }
  }
  console.log(mensagem);
}
