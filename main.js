const gerador = require('./gerador_numeros');
const sort = require('./sort.js');
const Sort = new sort();
// const valueGerated = gerador(4);
const valueGerated = [846, 589, 977, 465, 740, 681];
const valuesReorganizados = Sort.Descending(valueGerated);

console.log(valuesReorganizados);

// Sort.Descending(gerador(4));