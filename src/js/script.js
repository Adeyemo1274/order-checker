const prompt = require("prompt-sync")();

const menu = [
    {name: "Virgin mojito", price: 5000},
    {name: "Pina colada", price: 7000},
    {name: "Blue magarita", price: 4500}
]

for(let i=0; i < menu.length; i++){
    let quantity= parseInt(prompt(`How many ${menu[i].name} do you want?: `));
    let totalCost= quantity * menu[i].price;

    console.log(`Total cost for ${menu[i].name}: $${totalCost}`);

}