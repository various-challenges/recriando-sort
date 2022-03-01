class sort{
    
    Descending(numbers = null){
        let res = [];

        console.log('Numbers', numbers, '\nRes', res);
        for(let i = 0; i < numbers.length; i++){
            let verifRes = [];

            for(let y = 0; y<numbers.length; y++){

                if(numbers[i] != numbers[y]){

                    if(numbers[i] > numbers[y] == false){
                        verifRes.push({[i]: [false, y]});

                        // console.log('number',numbers[i], 'false', numbers[y]);
                    }

                    if(numbers[i] > numbers[y]){
                        verifRes.push({[i]: [true, y]});
                        // console.log('number',numbers[i], 'false', numbers[y]);
                    }
                }
            }
        }

    }
}

module.exports = sort;