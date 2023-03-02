/* When the script file is loaded, execution automatically begins at the top of the file */

console.log("Hello, what can i get for you?");

//* 
var pizza = {
  size: "Large",
  price: 11.95,
  toppings: "pepperoni and jalapenos",
  showInfo: function() {
    console.log(this.size + "Pizza is " + this.price + " because it has " + this.inventory);
  },
  takeDamage: function() {
    this.health -= 21;
  }
}


pizza.showInfo();
pizza.size = "Large" ;
pizza.showInfo();
pizza.price();
pizza.showInfo();
pizza.toppings = "pepperoni and jalapenos"
console.log(pizza["inventory"]);
console.log(pizza.inventory);