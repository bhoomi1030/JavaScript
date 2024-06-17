const food = ["apple", "mango"]
const fast_food = ["samosa", "pizza"]

//food.push(fast_food)
//console.log(food);

const allfood = food.concat(fast_food)
console.log(allfood);

const all_food = [...food , ...fast_food]
console.log(all_food);