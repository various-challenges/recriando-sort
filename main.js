const gerador = require('./gerador_numeros');
const sort = require('./sort.js');
const Sort = new sort();
// const valueGerated = gerador(1000000);
// const valueGerated = [846, 589, 977, 465, 740, 681];
const valueGerated = gerador(10000);
const valuesReorganizados = Sort.Descending(valueGerated);

console.log(valuesReorganizados);
// Sort.Descending(gerador(4));