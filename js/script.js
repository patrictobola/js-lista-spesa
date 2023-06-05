
// Recuperato l'elemento contenitore dal DOM
const listContainer = document.getElementById('list');

// Creata una lista di cose da comprare 
const shoppingList = ['pane', 'pasta', 'acqua', 'birra', 'latte', 'uova', 'frutta', 'verdura', 'caffè', 'sale', 'carne', 'pesce', ];

// Preparazione al ciclo for 

// Ho deciso di usare il template literal questa volta quindi creo un apertura dell'ul fuori dal ciclo for
listItems = `<ul>`

// Ciclo for che prende gli elementi dall'array
for (let i = 0; i < shoppingList.length; i++){
    listItems += `<li>${shoppingList[i]}</li>`
}

// Chiusura dell'ul
listItems += `</ul>`

// Stampo in pagina (senza stilizzare) la lista della spesa (tutti gli elementi all'interno dell'array)
listContainer.innerHTML = listItems;




