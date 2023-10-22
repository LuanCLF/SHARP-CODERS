const eixosLinha1 = lines[0].split(" ");
const eixosLinha2 = lines[1].split(" ");

const x1 = parseFloat(eixosLinha1[0]);
const y1 = parseFloat(eixosLinha1[1]);

const x2 = parseFloat(eixosLinha2[0]);
const y2 = parseFloat(eixosLinha2[1]);

const valorPuro = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
const distancia = Math.sqrt(valorPuro);

console.log(distancia.toFixed(4));
