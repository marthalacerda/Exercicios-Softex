import { ProducCustomDecorator } from "./product-custom-decorator";
import { ProductDecorator } from "./product-decorator";
import { ProductStampDecorator } from "./product-stamp-decorator";
import { TShirt } from "./t-shirt";

const camiseta = new TShirt();
const decoratedTShirt = new ProductDecorator(camiseta);
console.log(camiseta.getPrice());
console.log(decoratedTShirt.getName());

const stampDecoratadTShirt = new ProductStampDecorator(camiseta);
console.log(stampDecoratadTShirt.getPrice());
console.log(stampDecoratadTShirt.getName());

const stampDecoratadTShirtFrontAndBack = new ProductStampDecorator(stampDecoratadTShirt);
console.log(stampDecoratadTShirtFrontAndBack.getName());
console.log(stampDecoratadTShirtFrontAndBack.getPrice());

const customTShirt = new ProducCustomDecorator(camiseta);
console.log(customTShirt.getPrice());
console.log(customTShirt.getName());



