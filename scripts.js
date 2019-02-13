const aleatorio = function (min = 0, max =0){
    return Math.floor(math.random()*(max-min+1))+min;
}
console.log('oi')
let sorteado = aleatorio(0, 50) 

let resposta = Number(prompt('Adivinhe qual é o número. Lembre-se que ele está entre 0 e 50 ;)'));

i=10;
while(i>){
    if(resposta === sorteado){ 
        alert('Acertô miseravi!!!!')
    }
    else if(resposta > sorteado){

    }
    else{

    }
    i--;
}