// IIFE -> IMMEDIATELY INVOKED FUNCTION EXPRESSION

(function (){
    const sobrenome = 'Miranda'
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }
    
    function falaNome(){
        console.log(criaNome('Luiz'));
    }
    falaNome();
})();

const nome = 'qualquer coisa';

