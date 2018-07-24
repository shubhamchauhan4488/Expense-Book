//Object destructuring : It allows us to pull properties out of an object

const Person = {
    name : 'Shubham',
    age : 25,
    location : {
        city : 'Gurgaon',
        temp : 34
    }
}

//Below is the destructuring : this way we can put all things in one line 
//else we would be using mnultiple lines 
// Passisng deffault  : age = 26 , when we dont [ass value this willbe taken
// Renaming variables : temp : temperature
// Rename + defaults  is like  temp : temperature = 35
const { name, age = 26 } = Person;
const { city, temp : temperature = 35} = Person.location;
console.log(`${name} is aged ${age}`);
console.log(`${name} lives in ${city} where temperature is ${temperature}`);



//Array destructuring : It allows us to pull items out of an array
const addressArray = ['430', 'Grenoble Drive', 'toronto', 'Ontoario'];
const [hno, street, mycity, state] = addressArray  //ordered list of items : match by position
// const [, , city = 'New York'] = addressArray //will grab only the city
//Giivin in default value 
console.log(`You are in ${mycity} which is in ${state}`);