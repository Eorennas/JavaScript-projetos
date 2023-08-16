const form = document.querySelector('.formulario');

form.addEventListener('submit', function(evento){
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso');
    const inputaltura = evento.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputaltura.value);
    
    if(!peso){
        setResultado('Peso inválido', false);
        return;
    }

    if(!altura){
        setResultado('Peso inválido', false);
        return;
    }

    const imc = getImc(peso, altura);

    
   
})

function getImc(peso, altura){
    const imc = peso / altura **2;
    return imc.toFixed(2);
}

function criaP(){
    const p = document.createElement('p');
    return p;
}
function setResultado(msg, isValid){

    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP;
    p.innerHTML = msg;
    resultado.appendChild(p);
    
};
