/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]


//___________________________________________________________

//METODO CON IL CICLO FOR:

//creo array vuoto
let initials = [];

//ciclo for
for (let i = 0; i < names.length; i++) {
    const firstLetter = names [i] [0]; //prendo la prima lettera del nome
    initials.push(firstLetter); //la aggiungo nell'array delle iniziali creato sopra 
}

//stampo a schermo il risultato atteso: ["A", "L", "M", "A", "G", "A"]
console.log(initials);


