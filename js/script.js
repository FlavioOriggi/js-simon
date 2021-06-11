// -Un alert() espone 5 numeri generati casualmente.-

// -Da li parte un timer di 30 secondi.

// -Dopo 30 secondi l'utente deve inserire, uno alla volta, 
//  i numeri che ha visto precedentemente, tramite il prompt().

// -Dopo che sono stati inseriti i 5 numeri, il software dice quanti
//  e quali dei numeri da indovinare sono stati individuati.


document.getElementById('avvia').addEventListener('click', function(){

    var listaNumeriPc =[];

    while(listaNumeriPc.length < 5){
        var numeroRandomPc = Math.floor(Math.random() * 100) + 1;
        if(listaNumeriPc.indexOf(numeroRandomPc) === -1) listaNumeriPc.push(numeroRandomPc);
    }   
    console.log(listaNumeriPc);
   
    // funziona anche con alert, ma con alert non si chiude poichè bisogna cliccare "Ok" per chiuderlo
    // var notification = new Notification("Sfida la sorte", {body: 'Hai 30 secondi per memorizzare questa sequenza di numeri che poi dovrai inserirli: ' + listaNumeriPc });
    // setTimeout(function() {notification.close()}, 3000);
  

    // timer di 30 secondi
    setTimeout(myFunction, 3000);
    alert('Hai 30 secondi per memorizzare questa sequenza di numeri che poi dovrai inserirli: ' + listaNumeriPc );    

    var listaUtente = [];   

    function myFunction(){  
        
        // l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt()
        while(listaUtente.length < 5){
            numeroUtente = parseInt(prompt('Inserisci, uno alla volta, la sequenza di numeri:'));
            if(numeroUtente > 0 && numeroUtente <= 100 && listaUtente.indexOf(numeroUtente) === -1){ 
                listaUtente.push(numeroUtente);
            } else {
                alert('I numeri sono compresi tra 1 e 100 e non devono essere ripetuti');
            }            
        }  
        console.log(listaUtente); 


        // quanti e quali dei numeri da indovinare sono stati individuati

        var arr = [];

        function arrayMatch(listaNumeriPc, listaUtente) {
            
            listaNumeriPc = listaNumeriPc.toString().split(',').map(Number);
            listaUtente = listaUtente.toString().split(',').map(Number);
            // console.log(listaUtente);
            
            for (var i in listaNumeriPc) {
               if(listaUtente.indexOf(listaNumeriPc[i]) !== -1)
               arr.push(listaNumeriPc[i]);
            }
            // console.log(arr);
         
            return arr.sort((x,y) => x-y);
        }   
        
        document.getElementById('testo').innerHTML =  'I numeri seguenti, sono quelli che hai indovinato: ' + arrayMatch(listaNumeriPc, listaUtente,) + '. Hai totalizzato ' + arr.length + ' punti';       
        
    
        // console.log('I numeri seguenti, sono quelli che hai indovinato: ' + arrayMatch(listaNumeriPc, listaUtente,) + '. Hai totalizzato ' + arr.length + ' punti');


    
    }       
    
});