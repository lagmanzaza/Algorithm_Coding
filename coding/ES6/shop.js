// input
let shirt_price = parseInt(prompt("price : "));
let count = parseInt(prompt("shirt price : "));
let discount = parseFloat(prompt("discount : "));

// calculator price & quantity
let total_price = parseInt(shirt_price) * parseInt(count);

// find price include quantity and discount
let discount_price = discount/100 * total_price;

let includeAll = total_price - discount_price;
console.log(parseFloat(includeAll).toFixed(2));
