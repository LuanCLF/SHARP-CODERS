let data = lines.shift().trim().split("/");

console.log(`${data[1]}/${data[0]}/${data[2]}`);
console.log(`${data[2]}/${data[1]}/${data[0]}`);
console.log(`${data[0]}-${data[1]}-${data[2]}`);
