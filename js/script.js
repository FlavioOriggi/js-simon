// -Un alert() espone 5 numeri generati casualmente.-

// -Da li parte un timer di 30 secondi.

// -Dopo 30 secondi l'utente deve inserire, uno alla volta, 
//  i numeri che ha visto precedentemente, tramite il prompt().

// -Dopo che sono stati inseriti i 5 numeri, il software dice quanti
//  e quali dei numeri da indovinare sono stati individuati.


var listaNumeriPc =[];

while(listaNumeriPc.length < 5){
    var numeroRandomPc = Math.floor(Math.random() * 100) + 1;
    if(listaNumeriPc.indexOf(numeroRandomPc) === -1) listaNumeriPc.push(numeroRandomPc);
}

alert('Hai 30 secondi per memorizzare questa sequenza di numeri che poi dovrai inserirli: ' + listaNumeriPc );
console.log(listaNumeriPc);


setTimeout(myFunction, 3000);

var listaUtente = [];
console.log(listaUtente);

function myFunction(){
    listaUtente += parseInt(prompt('Inserisci la sequenza di numeri:'))
}