/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function contaVocali(parolaDaControllare) {

    let vocaliTrovate = [];

    for (let i = 0; i < parolaDaControllare.length; i++) { //avvio un ciclo for così guardo tutte le lettere una per una

        const letteraCheStoGuardando = parolaDaControllare [i]; //prendo la lettera corrente/che sto guardando della parola alla posizione i
        // al primo giro currentLetter = "j", al secondo = "a", poi "v", ecc

        if ("aeiou".includes(letteraCheStoGuardando)) {

             vocaliTrovate.push(letteraCheStoGuardando);
        }
    }

    return vocaliTrovate;

}


// Invoca la funzione qui e stampa il risultato in console
const risultato = contaVocali(word);



//Risultato atteso se si passa 'javascript': 3 (a, a, i)
console.log("Vocali trovate:", risultato);
console.log("Numero di vocali:", risultato.length);