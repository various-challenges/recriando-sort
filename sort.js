class sort{
    Descending(ArrNumbers = null){
        let res = [];
        let arr_atualizado = ArrNumbers;

        loop_verif( arr_atualizado[0], arr_atualizado ); // chamada que faz começar o loop
        
        function loop_main(dados, arr_att){
            //caso retorne true
            if(dados[0]){
                res.push(dados[1]) // guarda o numero correto

                //logica para deletar ele do array do qual usamos para veficações
                for(let y = 0; y < arr_atualizado.length; y++){
                    if(dados[1] == arr_atualizado[y]){
                        arr_atualizado.splice(y, 1) //deleta um numero especifico
                    }
                }

                //logica para retomar o loop
                if(arr_atualizado.length > 1){
                    loop_verif( arr_atualizado[0], arr_atualizado )
                }
            }

            //caso retorne false
            if(!dados[0]){
                loop_verif( dados[1], arr_atualizado )
            }

            //zona de testes com console.log()
        }

        function loop_verif( number, arr_att ){
            let guarda_valores = [];
            //console.log('Arr_Att loop_verif', arr_att );
          
            //logica de verificação e salvamento no array do guarda_valores
            for(let i = 1; i < arr_att.length; i++){
              if(number < arr_att[i]){ //caso queira passar a logica de organização crescente para decrescente, altere o sinal (>) para (<)
                guarda_valores.push({
                  numero: number,
                  foiMaior: arr_att[i]
                })
              }
              
            }
          
            if( guarda_valores == '' ){
                loop_main ([ true, number ], arr_att); //se o number foi o menor ele retorna isso
            }
            else{
                loop_main ([ false, guarda_valores[0].foiMaior ], arr_att); // se o number não for o menor, ele retorna false, e o numero do qual ele foi maior
            }
          }
          
          //quando toda o logica termina e mostra o resultado para o user
          res.push(arr_atualizado[0]);
          return res.join(', ');
    }

}

module.exports = sort;