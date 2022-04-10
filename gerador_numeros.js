function geraNumbers(quant){
    const number = [];
    for(let i = 0; i< quant; i++){
        number.push(Math.floor(Math.random() * 1000));
    }

    for(let y = 0; y < number.length; y++){
        if(number[y] == 0 || number[y] == 1){
            number[y] = Math.floor(Math.random() * 10000) + 10
        }
    }

    return number; 
}

module.exports = geraNumbers;