try{
    // É executada quando não há erros
    console.log('abrir um arquivo');
    console.log('manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
}catch(e){
    // É executada quando há erros
    console.log('Tratando o erro');
}finally{
    // sempre
    console.log('Finally eu sempre sou executado')
}