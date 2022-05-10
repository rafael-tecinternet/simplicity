let formulario = document.querySelector('form');
let numeroEscolhido = parseInt(Math.random()*11);
let btn = document.querySelector('button');
let i = 0;


btn.onclick = function(){
    
    formulario.addEventListener('submit', function(event){
    event.preventDefault();
    let palpiteUsuario = parseInt(document.getElementById('palpite').value);
    let resultado = document.getElementById('resultado');
    
    if( i < 4){  
        if(palpiteUsuario == numeroEscolhido){
            resultado.innerHTML = "Você acertou!";
        }else if(palpiteUsuario < 0 || palpiteUsuario > 10 ){
            resultado.innerHTML = "Digite um número entre 0 e 10";
            
        }else if(palpiteUsuario > numeroEscolhido){
            resultado.innerHTML = "Errou Seu palpite é menor que o número sorteado";
        }else{
            resultado.innerHTML = "Errou Seu palpite é maior que o número sorteado";
        };            
    }else{
        resultado.innerHTML = "LOSER, tente novamente recarregando a página";
    };
});
    i++
    console.log(i) 
};



