const aleatorio = function (min = 0, max = 50) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}


let sorteado = aleatorio(0, 50)


let resposta = Number(prompt('Adivinhe qual é o número. Lembre-se que ele está entre 0 e 50 ;)'));

let i = 0;
let vidas = 9;

while ((vidas < i) || (resposta < sorteado) || (resposta > sorteado) || (resposta == sorteado)) {
    if (resposta == sorteado) {
        alert('Acertô miseravi!!!!');
    }


    else if (resposta > sorteado) {
        resposta = (prompt('Errou, chute mais baixo'));
        

    }

    else if (resposta < sorteado) {
        resposta = (prompt('Errou, chute mais alto'));
    }

     vidas-1;


}


if(vidas< i){
    alert("Você perdeu tente na proxima")
}
