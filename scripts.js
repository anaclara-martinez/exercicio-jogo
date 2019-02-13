const aleatorio = function (min = 0, max =0){
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log('oi')
let sorteado = aleatorio(0, 50) 

let resposta = Number(prompt('Adivinhe qual é o número. Lembre-se que ele está entre 0 e 50 ;)'));

i=10;
while(i>0){
    if(resposta === sorteado){ 
        alert('Acertô miseravi!!!!');
    }
    else if(resposta > sorteado){
        let resposta= Number(prompt('Não foi dessa vez...seu número é um pouco menor.'));
    }
    else if(resposta<sorteado){
        let resposta=Number(prompt('Não foi dessa vez...seu número é um pouco maior.'));
    }
    else{
        alert('Você perdeu. Boa sorte na próxima. Otário hahahah');
    }
    
    i--;
}
