import { IProduct } from "./iproduct";

export class TShirt implements IProduct {
    private name = 'Camiseta';
    private price = 49.90;

    getName(): string {
        return this.name;
    }
    getPrice(): number {
        return this.price;
    }
    
}