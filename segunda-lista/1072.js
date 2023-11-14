const valores = input.split('\n').map(numero => parseInt(numero));
const testes = valores.shift();
let incluso = 0;

for(i = 0; i < testes; i++){
    const x = valores.shift();
    
    if(10 <= x && x <= 20){
        incluso++;        
    }
}

console.log(`${incluso} in`);
console.log(`${testes - incluso} out`);