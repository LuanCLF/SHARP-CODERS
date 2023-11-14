const cpf = input.replace("-", ".").split(".");

cpf.forEach((pedaco) => {
  console.log(pedaco.trim());
});
