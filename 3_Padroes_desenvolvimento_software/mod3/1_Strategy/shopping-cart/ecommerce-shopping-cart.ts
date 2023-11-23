import { DiscountStrategy } from "./discount-strategy";
import { EcommerceProductProtocol } from "./ecommerce-product-protocol";

export class EcommerceShoppingCart {
  private products: EcommerceProductProtocol[] = [];
  private _discountStrategy: DiscountStrategy = new DiscountStrategy();

  addProduct(...products: EcommerceProductProtocol[]): void {
    products.forEach(product => this.products.push(product));
  }

  getProducts(): EcommerceProductProtocol[] {
    return this.products;
  }

  getTotal(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  getTotalWithDiscount(): number {
    const total = this.getTotal();
    
    return this._discountStrategy.getDiscount(this);
  }

  set discount(discount: DiscountStrategy) {
    this._discountStrategy = discount;
  }
}