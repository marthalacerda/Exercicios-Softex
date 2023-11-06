import { IGalinha } from "./IGalinha";

export class Galinha implements IGalinha {
    
    cacarejar(): void {
        console.log('CÓ COROCÓ...!')
    }
    andar(): void {
        console.log('Deu uma ciscada e saiu andando!')
    }
    
}