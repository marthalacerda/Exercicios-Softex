const personPrototype = {
    firstName: 'Martha',
    lastName: 'Lacerda',
    age: '34',

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

const anotherPerson = Object.create(personPrototype);
console.log(anotherPerson);
console.log(anotherPerson.age);
console.log(anotherPerson.fullName());
console.log();
anotherPerson.firstName = 'Francis';
console.log(personPrototype);
console.log(anotherPerson);
console.log(anotherPerson.fullName());