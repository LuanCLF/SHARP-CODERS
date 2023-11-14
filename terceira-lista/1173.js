const entrada = parseInt(input);
const array = [entrada];

for(let i = 0; i < 10; i++){
    console.log(`N[${i}] = ${array[i]}`);
    array.push(2 * array[i]);
}