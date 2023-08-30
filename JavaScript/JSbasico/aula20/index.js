// declaração de função (function hoisting)
// posso declarar antes da função tambem falaOi();
function falaOi(){
    console.log('Oie');

}
// posso declarar depois falaOi();


// first-class objects (objeto de primeira classe)
// function expression

const souUmDado = function(){
    console.log('sou um dado');
};
//souUmDado();

function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo:');
    funcao();
}
executaFuncao(souUmDado);

// Arrow Function 

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

//  dentro de um objeto
const obj = {
    falar: function(){
        console.log('Estou falando...');
    }
    
};
obj.falar();