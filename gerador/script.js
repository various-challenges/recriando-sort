document.querySelector('#btn-gerar')
    .addEventListener('click', (e) => {
        e.preventDefault();

        const quantity = document.querySelector('#quantity').value
        document.querySelector('#result-display').innerText = geraNumbers(Number(quantity));
    })

document.querySelector('#btn-copy')
    .addEventListener('click', () => copyToClickBoard());

function geraNumbers(quant){
    const number = [];
    for(let i = 0; i< quant; i++){
        number.push(Math.floor(Math.random() * 1000));
    }

    for(let y = 0; y < number.length; y++){
        if(number[y] == 0 || number[y] == 1){
            number[y] = Math.floor(Math.random() * 1000) + 10
        }
    }

    return number; 
}

function copyToClickBoard(){
    var content = document.querySelector('#result-display').innerText;

    navigator.clipboard.writeText(content)
        .then(() => {
        alert("Text copied to clipboard...")
    })
        .catch(err => {
        alert('Something went wrong', err);
    })
 
}