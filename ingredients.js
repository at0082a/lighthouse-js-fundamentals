/*

// 1) while loop that lists all ingredients

var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var counter = 0;

while (counter < ingredients.length) {
  console.log(ingredients[counter])
  counter++
}



// 2) a for loop that lists all ingredients

var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

for (i = 0; i < ingredients.length; i++) {

  console.log(ingredients[i]);

}

*/

var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
ingredients.reverse();

for (i =0; i < ingredients.length; i++) {
  console.log(ingredients[i])
}



