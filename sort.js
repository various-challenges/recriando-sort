class sort{
    Descending(ArrNumbers = null){
        let res = [];
        const arr_atualizado = ArrNumbers;

        loop_verif( arr_atualizado[0], arr_atualizado ); // aqui começa o loop        
        function loop_main( dados ){
            switch(dados[0]){
                case true: {
                    res.push(dados[1]); // guarda o numero correto

                    //logica para deletar ele do array do qual usamos para veficações
                    for( let y in arr_atualizado ){
                        dados[1] == arr_atualizado[y] && arr_atualizado.splice(y, 1); //deleta um numero especifico
                    }

                    //logica para retomar o loop
                    arr_atualizado.length > 1 && loop_verif( arr_atualizado[0], arr_atualizado );

                    break;
                }
                case false: {
                    loop_verif( dados[1], arr_atualizado );
                }
            }
        }

        function loop_verif( number, arr_att ){
            let guarda_valores = [];
          
            //logica de verificação e salvamento no array do guarda_valores
            for( let i in arr_att ){
                //caso queira passar a logica de organização crescente para decrescente, altere o sinal (>) para (<)
                number > arr_att[i] && (
                    guarda_valores.push({
                        numero: number,
                        foiMaior: arr_att[i]
                    })
                );
            }

            guarda_valores == '' ? 
                loop_main ([ true, number ], arr_att) : //se o number foi o menor ele retorna isso
                loop_main ([ false, guarda_valores[0].foiMaior ], arr_att) // se o number não for o menor, ele retorna false, e o numero do qual ele foi maior

          }
          
          //quando toda o logica termina e mostra o resultado para o user
          res.push(arr_atualizado[0]);
          return res.join(', ');
    }

}

module.exports = sort;