const a = parseFloat(lines.shift());
const b = parseFloat(lines.shift());
const c = parseFloat(lines.shift());

const delta = Math.pow(b, 2) - 4 * a * c;

const r1 = (-b + Math.sqrt(delta)) / (2 * a);
const r2 = (-b - Math.sqrt(delta)) / (2 * a);

if (isNaN(r1) || isNaN(r2)) {
  console.log("Impossivel calcular");
} else {
  console.log(`R1 = ${r1.toFixed(5)}\nR2 = ${r2.toFixed(5)}`);
}
