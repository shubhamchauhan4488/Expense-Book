class Person {
    constructor(name = 'anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getDescription(){
        //Using template string
        return `${this.name}! has turned ${this.age} years old`;
        // this is same as : {this.name} + ' has turned ' + {this.age} + 'years old'
    }
}

//Inheritance 
class Traveller extends Person {
    constructor(name, age, cityVisited){
        super(name, age);
        this.cityVisited = cityVisited;
    }
    //Function overriding : Dynamic Polymorphism
    // getDescription(){
    //     return `testing`; 
    // }

    hasTravelled(){
        return !!this.cityVisited; //New tachnique to get the boolean value out 
        //whn checking whether a string value exists or not
    }

    getDescription(){
        let description = ` ${super.getDescription()}`
        if (this.hasTravelled()) {
            description +=  `.He has visited ${this.cityVisited} `
        }
        return description;
    }
}

const me = new Person('Shubham', 26);
const vaibhav = new Person('Vaibhav');

const alok = new Traveller('Alok', 25);
const other = new Traveller('Rick', 22, 'Bangalore');
const arpan = new Traveller(undefined, undefined, 'No Mans Land');

console.log(other.getDescription());
console.log(alok.getDescription());
console.log(arpan.getDescription());