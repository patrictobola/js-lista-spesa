console.log('JS OK')

const listContainer = document.getElementById('list');

const shoppingList = ['pane', 'pasta', 'acqua', 'birra', 'latte', 'uova', 'frutta', 'verdura', 'caffè', 'sale', 'carne', 'pesce', ];

listItems = `<ul>`
for (let i = 0; i < shoppingList.length; i++){
    listItems += `<li>${shoppingList[i]}</li>`
}
listItems += `</ul>`

listContainer.innerHTML = listItems;