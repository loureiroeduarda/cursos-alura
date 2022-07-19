function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTlecas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTlecas.length; i++){
    const tecla = listaDeTlecas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function(){
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(evento){
        if (evento.code ==='Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
};


/*let contador = 0;

while (contador < listaDeTlecas.length){
    const tecla = listaDeTlecas[contador];    
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`
    //console.log(idAudio);

    tecla.onclick = function() {
        tocaSom(idAudio);
    };
    contador++;
    //console.log(contador);
}*/