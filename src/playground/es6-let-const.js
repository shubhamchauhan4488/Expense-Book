//In using var there is a fear of assigning the value again
var name = 'Shubham';
var name  = 'chauhan';
console.log('Namevar', name);

//use 'let' instead of var
let nameLet = 'jen';
nameLet = 'Chen';
//let name = 'Chen' will throw an error
console.log('Namelet', nameLet);

//const is used for declaring constant, it cannot be reassigned
const fullName = 'Shubham chauhan';
//something declared with let follows block scope unlike var which will be accessible outside 
//if construct even if it is decalred inside that if{}

//use const if value will never change 
//use let if value will change 
let firstName
if (fullName)
{
    firstName = fullName.split(' ')[0];
    console.log('FirstName', firstName);
}
console.log('FirstName', firstName);