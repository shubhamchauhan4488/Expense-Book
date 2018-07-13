// installing , importing and using npm modules
// import validator from 'validator';
// console.log(validator.isEmail('shubham@gmail.com')); //using 'validator' which is an npm module/
//File size will increase with very imoprt  of npm modules

//These are default imports
import React from 'react'
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

// const obj = {
//     name : 'Vikram',
//     getName(){
//         return this.name;
//     }
// };
// const getName = obj.getName;
// console.log(getName()); // will give an error : name not found 
//because we have transferred the reference of the method to 'getName' but reference of object is non=transferable
//Solution
// const getName = obj.getName.bind(obj);
// console.log(getName());

    // Component is a React Class. With React components We have to define a method here render()
    // With es6 classes we can have zero methods
        // class Header extends React.Component{
        //     //Component is a React Class. With React components We have to define a method here render()
        //     //With es6 classes we can have zero methods
        //     render(){
        //         return (
        //         <div>
        //             //THIS IS THE REFERENCE TO THE CURRENT INSTANCE OF THIS Component   
        //             <h1>{this.props.title}</h1>
        //             <h2>{this.props.subtitle}</h2>
        //         </div>
        //         );
        //     }
        // }



        // class Options extends React.Component{
        //     // constructor(props)
        //     // {super(props);
        //     //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
        //     // }
        //     // handleRemoveAll(){
        //     //     console.log(this.props.options);
        //     //     //  Will give error if we dont bind 'this' : cannot find 'props'
        //     //     // alert("Removed"); 
        //     // }
        //     //Only for render the 'this' is bind to the instance of the class. 
        //     // /For methods inside the class we need to bind them separately using constructor
        //     //We could have binf inside the render like :
        //     // <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button> but this will bind every time we re render which is inefficient
        //     render(){
        //         return(
        //             <div>
        //             <button onClick={this.props.handleDeleteAll}>Remove All</button>
        //             {this.props.options.map((option) => {
        //                     return <Option key={option} optionText = {option}/>
        //                 } )
        //             }
        //             </div>
        //         );
        //     }
        // }



//Now this has no use
// const jsx = (
//     <div>
//         <h1>Title</h1>
//         <Header />
//         <Action />
//         <Options />
//         <AddOptions />
//     </div>
// );
class OldSyntax {
    constructor(){
        this.name = 'Shubham';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting(){
        return `My name is ${this.name}.`;
    }
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

//New syntax after settingup babel-transform-class-properties
// We can now declare state outside the constructor and use arrow functions instead of class methods to avoid individual 'this' binding
//Overall using class-properties we can completely remove constructor from our code
class NewSyntax {
    name = 'Shubham';
    //ARROW FUNCTION USE WHATEVER 'THIS' IS IN SCOPE : HERE PARENT'S 'THIS'
    getGreeting = () => {
        return  `My name is ${this.name}.`;
    }
}
const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;

console.log(newGetGreeting());

ReactDOM.render(<IndecisionApp options = {['Distribute cards', 'Rum 10 kms']}/> , document.getElementById('main-div'));



//Named and default exports 
    // import './utils.js';
    // //The file in the import runs first, then the lines in the present file are run
    // import minus,{square, add} from './utils.js'
    // import  anyName,{ isAdult, canDrink } from './person.js' //here anyName is the default export(we can grab deafualt export by any name)
    // //only import doesnt work, we need to export as well

    // // console.log("app.js in the src folder is now running!");
    // // console.log(square(5)); //Will give an error because square function inside utils.js is not accessible outside the file 
    // //i.e variables and functions do not have global scope, otherwise it will create huge mess by overriding
    // // console.log(add(5 + 100));
    // console.log(minus(45,15));      
    // console.log(isAdult(14));
    // console.log(canDrink(30));
    // console.log(anyName(60));
    // // isAdult(14);
    // // canDrink(30);


