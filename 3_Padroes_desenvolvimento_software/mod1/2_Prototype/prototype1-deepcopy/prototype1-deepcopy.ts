export interface Prototype {
    clone(): Prototype;
}

export class Address implements Prototype {
    constructor(public street: string, public number: number) {};

    clone(): Address {
        const newAddress = new Address(this.street, this.number);
        return newAddress;
    }
}

export class Person implements Prototype {
    public addresses: Address[] = [];

    constructor(public name: string, public age: number) {};
    
    clone(): Person {
        const newObject = new Person(this.name, this.age);
        newObject.addresses = this.addresses.map((item) => item.clone());
        return newObject;
    }

    addAddress(address: Address): void {
        this.addresses.push(address);
    }
}

const address1 = new Address('Av Brasil', 200);
const address2 = new Address('Av Recife', 404);
const person1 = new Person('Person 1', 34);
person1.addAddress(address1);
const person2 = person1.clone();

person1.addresses[0].street = 'mudei'

console.log(person1);
person2.name = 'Person 2';
console.log(person2.name);
//person2.addresses[0] = address2;
console.log(person2.addresses);

