
// Recuperato l'elemento contenitore dal DOM
const listContainer = document.getElementById('list');

// Creata una lista di cose da comprare 
const shoppingList = ['pane', 'pasta', 'acqua', 'birra', 'latte', 'uova', 'frutta', 'verdura', 'caffè', 'sale', 'carne', 'pesce', ];

// // Preparazione al ciclo for 

// // Ho deciso di usare il template literal questa volta quindi creo un apertura dell'ul fuori dal ciclo for
// listItems = `<ul>`

// // Ciclo for che prende gli elementi dall'array
// for (let i = 0; i < shoppingList.length; i++){
//     listItems += `<li>${shoppingList[i]}</li>`
// }

// // Chiusura dell'ul
// listItems += `</ul>`

// // Stampo in pagina (senza stilizzare) la lista della spesa (tutti gli elementi all'interno dell'array)
// listContainer.innerHTML = listItems;




// Creazione del ciclo while sfruttando array e contenitore nel dom precedente


// Come in precedenza, avendo deciso di usare il template literal, apro un <ul> all'interno del container prima del ciclo while
let listItems = `<ul>`

// "forzo" il ciclo while con le basi del ciclo for, creando una i fuori dal ciclo
let i = 0;

// Nel ciclo while aggiungo ogni elemento dell'array all'interno di una variabile esterna fintanto che la i è inferiore alla lunghezza dell'array
while (i < shoppingList.length) {
    listItems += `<li>${shoppingList[i]}</li>`;
    i++
}

// Chiudo l'ul
listItems += `</ul>`

// Inserisco in pagina la lista della spesa 
listContainer.innerHTML = listItems;