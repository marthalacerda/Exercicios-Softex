import { IProduct } from "./iproduct";

export class ProductDecorator implements IProduct {
    constructor(protected product: IProduct) {}


    getPrice(): number {
        return this.product.getPrice();
    }
    getName(): string {
        return this.product.getName();
    }
   


}