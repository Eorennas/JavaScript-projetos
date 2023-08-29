function relogio(){
    function getTimeFromSeconds(seconds){
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR',{
            hour12: false,
            timeZone: 'GMT'
        });
    }
    
    
    
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const resetar = document.querySelector('.resetar');
    let seconds = 0;
    let timer;
    
    function iniciaRelogio(){
         timer = setInterval(function(){
            seconds++
            relogio.innerHTML = getTimeFromSeconds(seconds);
        }, 1000)
    }
    
    iniciar.addEventListener('click', function(event){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    });
    pausar.addEventListener('click', function(event){
        clearInterval(timer);
        relogio.classList.add('pausado');
    
    });
    resetar.addEventListener('click', function(event){
        clearInterval(timer);
        relogio.classList.remove('pausado');
        relogio.innerHTML = '00:00:00';
        seconds = 0;
    });

}
relogio();
