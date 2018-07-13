'use strict';

console.log("This is coming from app.js");

//This is JSX : Javascript XML
//We inserted div beacuse the adjacent JSX cannot occur, it needs to be placed under one root element
var app = {
    title: 'SomeTitle',
    subtitle: 'Some Subtitle'
    // options : ['one', 'two'] 
};
var temp = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        'Here is the subtitle'
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are you options' : 'No options to display'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Mango'
        ),
        React.createElement(
            'li',
            null,
            'Bananas'
        )
    )
);
//This will give an error since we have not used Babel yet 


// var username = 'Shubham';
// var userlocation = 'Gurgaon';
// var age = 26;

//Making an object instead of individual variables 
var tempTwo = {
    //try commenting the code
    username: 'Shubham',
    userlocation: 'Gurgaon',
    age: 20
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location : ',
            location
        );
    } else {
        return 'Location is Unknown';
    }
}
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        tempTwo.username ? tempTwo.username : 'Anonymous',
        ' '
    ),
    tempTwo.age && tempTwo.age >= 18 && React.createElement(
        'p',
        null,
        ' Age : ',
        tempTwo.age
    ),
    getLocation(tempTwo.userlocation)
);
var appRoot = document.getElementById("main-div");

ReactDOM.render(temp, appRoot);
// takes 2 args : first is JSX that we want to render and id of the dom element where we want to render
