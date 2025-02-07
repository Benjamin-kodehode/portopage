class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  log() {
    console.log(this);
  }
}

const myCar = new Car("Ford", 2010);
myCar.log();

class Product {
  constructor(name, price, stock) {
    this.brand = "Kyle Gordon Clothes";
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
  }
  calculateTotal(salesTax) {
    return this.price + this.price * salesTax;
  }
  inStock() {
    if (this.stock > 0) {
      console.log("This product is in stock!");
      console.log(`Remaining stock: ${this.stock}`);
    } else {
      console.log("This product is not in stock.");
      console.log("We will restock this product soon.");
    }
  }
}

const salesTax = 0.05;

const productOne = new Product("Shirt", 15.99, 35);
const productTwo = new Product("Pants", 20.99, 20);
const productThree = new Product("Suit", 150.99, 10);
const productFour = new Product("Socks", 4.99, 0);

productThree.displayProduct();
const total = productThree.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);

productFour.inStock();

class SubProduct extends Product {
  constructor(name, price, stock, discount) {
    super(name, price, stock);
    this.discount = discount || 0;
  }
  displayDiscountedPrice() {
    const discountedPrice = this.price - this.discount;
    console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
  }
}
const myProduct = new SubProduct("Sweater", 29.99, 5, 5.0);
console.log(myProduct);
myProduct.displayProduct();
myProduct.displayDiscountedPrice();
myProduct.inStock();
