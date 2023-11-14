const metaDeDiferenca = parseInt(lines.shift());

let carXPorKm = 60;
let carYPorKm = 90;

const velocidadeRelativa = carYPorKm - carXPorKm;
const minutos = metaDeDiferenca / (30 / 60);

console.log(`${minutos} minutos`);
