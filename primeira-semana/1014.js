const distancia = parseInt(lines[0]);
const combustivel = parseFloat(lines[1]);

const consumoMedio = distancia / combustivel;

console.log(`${consumoMedio.toFixed(3)} km/l`);
