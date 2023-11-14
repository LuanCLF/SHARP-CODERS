const horas = parseInt(lines.shift());
const velocidade = parseInt(lines.shift());

const litrosPorKm = 12 / velocidade;

const litrosNecessarios = horas / litrosPorKm;

console.log(litrosNecessarios.toFixed(3));
