/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterNamesByInitial(namesArray) {

    let filteredNames = [];

    for (let i = 0; i < namesArray.length; i++) {

        const currentName = namesArray [i];

        if (currentName[0] === "A") {

            filteredNames.push(currentName);
        }
    }

    return filteredNames;

}


// Invoca la funzione qui e stampa il risultato in console
const result = filterNamesByInitial(names);

console.log("Nomi che iniziano per lettera A:", result);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]