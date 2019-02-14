const aleatorio = function (min = 0, max = 50) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}


let sorteado = aleatorio(0, 50)


let resposta;
let vidas = 10;


while (vidas > 0 && resposta != sorteado)   {
    resposta = Number(prompt(`Adivinhe qual é o número. Lembre-se que ele está entre 0 e 50 ;)`));

    if (resposta == sorteado) {
        alert('Acertô miseravi!!!!');
     }
    else {    
        vidas-=1; 
        if(vidas == 0){
            alert( 'Você perdeu, boa sorte na próxima.');
        }
       else if (resposta > sorteado) {
        alert('Errou, chute mais baixo');
        }
        else if (resposta < sorteado) {
            alert('Errou, chute mais alto');
        }
        
        }
}
