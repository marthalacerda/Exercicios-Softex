import { EcommerceShoppingCart } from "./shopping-cart/ecommerce-shopping-cart";
import { NewDiscount } from "./shopping-cart/new-discount";


const shoppingCart = new EcommerceShoppingCart();
shoppingCart.discount = new NewDiscount();
shoppingCart.addProduct({name: 'Produto1', price: 50});
shoppingCart.addProduct({name: 'Produto2', price: 250});
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());





