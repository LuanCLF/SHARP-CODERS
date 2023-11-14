var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

const a = parseFloat(lines[0]);
const b = parseFloat(lines[1]);
const c = parseFloat(lines[2]);

const areaTriangulo = (a * c) / 2;

const areaCirculo = 3.14159 * Math.pow(c, 2);

const areaTrapezio = ((a + b) * c) / 2;

const areaQuadrado = Math.pow(b, 2);

const areaRetangulo = a * b;

console.log(
  `TRIANGULO: ${areaTriangulo.toFixed(3)}\nCIRCULO: ${areaCirculo.toFixed(
    3
  )}\nTRAPEZIO: ${areaTrapezio.toFixed(3)}\nQUADRADO: ${areaQuadrado.toFixed(
    3
  )}\nRETANGULO: ${areaRetangulo.toFixed(3)}`
);
