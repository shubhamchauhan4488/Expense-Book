// //Functions ES syntax 
// function square(x){
//  return x*x; //returns the square of the number
// };
// //OR
// let square2 = function(x){
//     return x*x;
// };
// console.log(square(8));
// console.log(square2(5));


// //ES6 syntax : arrow functions
// let squareArrow = (x) => {
//     return x*x;
// }
// let squareArrow2 = (x) =>  x*x  //Implicit return for a single statement
// console.log(squareArrow(81));
// console.log(squareArrow2(15));

// let fullname = 'Shubham Chauhan'
// let getFirstName = (fullname) => {
//     return fullname.split(' ')[0];
// };
// let getFirstName2 = (fullname) => fullname.split(' ')[0];
// console.log(getFirstName(fullname));
// console.log(getFirstName2(fullname));


//Es 5 arguments object is no longer used in ES6 
const add = function(a,b){
    console.log(arguments);
    return a+b
}
console.log(add(3,4,5))

//ES6 syntax , arguments no longer available
const add2 = (a,b) => {
    // console.log(arguments);
    return a+b
}
console.log(add2(3,4,5))

//ES5 this was not bound
const user = {
    name : 'shubham',
    cities : ['delhi','mumbai','toronto'],

    //If we use arrow function here. this.cities will try to use 'this' of the parent scope 
    // i.e the global scope where 'this' cannot reference to the object 
    // citiesVisited : () => {
    //     this.cities.forEach((city) => {
    //         console.log(this.name + ' visited ' + city);
    //     });
    // }

    // citiesVisited : function(){
    citiesVisited(){
        //shorthand method
        return this.cities.map((city) => city + ' was visited by ' + this.name + '! ');
       
        // const cityMessage = this.cities.map((city) => {
        //     return city + ' was visited by ' + this.name + '! ';
        // });
        // return cityMessage;


        // this.cities.forEach((city) => {
        //     console.log(this.name + ' visited ' + city);
        //     //'this' here (in arrow function will use the this  of the parent i.e this of this.cities, 
        //     //so no need to bound 'this' as in the case of ES5 )
        // });
    }
};
console.log(user.citiesVisited());

//Challenge 
const multiplier = {
    multiplyBy : 2,
    numbersArray : [1,2,3,4,5,6],
    multiply(){
        return this.numbersArray.map((num) => num*this.multiplyBy);
    }
   
}
console.log(multiplier.multiply());