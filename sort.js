class sort{
    constructor(){
        this.res = [];
    }


    Descending(ArrNumbers = null){
        let numbers = ArrNumbers;
        let ResVeriFyNumber = this.VerifyNumber(589, numbers);

        console.log('Numbers', numbers, '\nRes', this.res);

        if(ResVeriFyNumber.res){

            if(ResVeriFyNumber.info != 'finish'){
                console.log('passou', 'Numero: ', ResVeriFyNumber.info);
                update_numbers(ResVeriFyNumber.info[0]);
                repeat(ResVeriFyNumber.info[0], ResVeriFyNumber.info[1]);
                // let teste = this.VerifyNumber(numbers[0], numbers);
                // console.log(teste);
            }
            
        }

        if(!ResVeriFyNumber.res){
            console.log('n passou , Numero: ', ResVeriFyNumber.info[1]);
            let teste = this.VerifyNumber(ResVeriFyNumber.info[1], numbers);
            console.log(teste);
        }

        // repete a logica de verificação 

        function repeat(NumberPassed = null, NextNumber = null){
            console.log('repeat: ', NumberPassed, NextNumber, '\n O arr atualizado: ', numbers);

        }

        function update_numbers(number_deleted) {
            for (let index = 0; index < numbers.length; index++) {
                number_deleted == numbers[index] && numbers.splice(1, index);  
            }
        }

    }
    
    VerifyNumber(number, arrNumbers){
        let res;
        let estado = [];

        for(let j = 0; j < arrNumbers.length; j++){

            if(number != arrNumbers[j]){

                if(number < arrNumbers[j]){
                    estado.push({number: number, res: [true, arrNumbers[j]]});
                }
    
                if(number > arrNumbers[j]){
                    estado.push({number: number, res: [false, arrNumbers[j]]})
                }

            }
            
        }
        let guardaErrados = [];
        
        for(let k = 0; k<estado.length; k++){
            estado[k].res[0] == false && guardaErrados.push(estado[k].res)
        }

        if(guardaErrados[0] == undefined) {
            let newNumbers = arrNumbers;
            
            for(let l = 0; l < newNumbers.length; l++){
                arrNumbers[l] == number && arrNumbers.splice(1, l);
            }

            if(newNumbers.length > 2){
                res = {res: true, info: [number, newNumbers[0]]};
            }

            if(newNumbers.length <= 2){
                res = {res: true, info: 'finish'};
            }

        }
        else {
            if(guardaErrados[0][0] == false){
                res = {res: false, info: guardaErrados[0]};
            }
        }

        return res;
    }

}

module.exports = sort;