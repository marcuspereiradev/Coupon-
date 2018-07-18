(function(){
    'use strict';
    
    function Abrir() {
        document.getElementById('light').style.display= 'block';
        document.getElementById('fade').style.display='block';		
    }

    function Fechar(){
        document.getElementById('light').style.display='none';
        document.getElementById('fade').style.display='none';		
    }		
})();