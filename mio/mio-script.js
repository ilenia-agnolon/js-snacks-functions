/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

// const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const nomiNostri = ["Gianni", "Topolino", "Andrea"];


// Dichiara la funzione qui.
function filterNamesByInitial(namesArray) {

    let filteredNames = [];

    for (let i = 0; i < namesArray.length; i++) {

        // const currentName = namesArray [i];

        // if (currentName[0] === "A") {

        if (namesArray[i] [0] === "A") {
            filteredNames.push(namesArray[i]);
        }

            

    }

    return filteredNames;

}


// Invoca la funzione qui e stampa il risultato in console
// const result = filterNamesByInitial(names);
const result2 = filterNamesByInitial(nomiNostri);
// console.log("Nomi che iniziano per lettera A:", result);
console.log("Nomi che iniziano per lettera A parte 2:", result2);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]