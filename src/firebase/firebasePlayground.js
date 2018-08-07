import * as firebase from 'firebase';
// * as : takes all the name exports and we create a new variable for them i.e firebase
// Now we can access all naned export using dot operator like : firebase.
// EG :import * as expensesactions from '../actions/expenses'
// expensesactions.

var config = {
    apiKey: "AIzaSyBsDepshuC7kFM341YlEEFApXhkLpbdI3Y",
    authDomain: "expensify-b9d78.firebaseapp.com",
    databaseURL: "https://expensify-b9d78.firebaseio.com",
    projectId: "expensify-b9d78",
    storageBucket: "",
    messagingSenderId: "737500670150"
  };
//to make the connection
firebase.initializeApp(config);


//ALL THE CALLS TO SET() ARE ASYNCHRONOUS i.e a 1st statement written  
//does not need to execute before 2nd statment(which is written after 1st statement)


// getting the root of the database firebase.database().ref()
const database = firebase.database()
database.ref().set({
    name : 'Shubham Chauhan',
    age : 26,
    isSingle: 'yes',
    location : {
        city : 'Toronto',
        province : 'ON'
    }
}).then(() => {
    console.log('data is saved')
}).catch((error) => {
    console.log('error' ,error)
})
// set :
// set(value, onComplete) returns firebase.Promise containing void , containing void : thats why then callback has no args

// Update : U
//Update using set
//Updating root :
// database.ref().set('It is my data') //also shows set() can take any data type
//Updating at 1 level deep 
// database.ref('age').set(25);
//Updating at 2 level deep 
// database.ref('location/city').set('Kitchener');

//Update using update command
database.ref().update({
    //adding new item
    job : {
        title : 'Soft Dev',
        company : 'Google'
    },
    //updating 1 level deep
    'location/city' : 'waterloo',
    'age' : '26'
})


//Create: C
// database.ref('attributes').set({
//     height : 182,
//     weight : 185
// }).then(() => {
//     console.log('Height and weight added')
// }).catch((error) => {
//     console.log('Error THAT THROWN when we change the database Rules to false : ' ,error)
// })



// Delete : D
database.ref('isSingle')
.remove()
.then(() => {
    console.log('iSingle removed from DB')
})
.catch((e) => {
    console.log('iSingle NOT removed from DB')
})
// OR instead of remove : 
// database.ref('isSingle').set(null)


//Read : R
// 'value' : to have access to all the data at once we use 'value'
// once() : will not loook for changes
//snapshot  :is the data we have access to , snapshot.val : to extract the object
database.ref().once('value')
.then((snapshot) => {
const val =  snapshot.val();
console.log(val)
}).catch((e) => {
    console.log(e)
})
//we can change the ref variable and access the objects which are 1 level 2 level deep etc
//like database.ref('location')  it will return location object

//TO look for changes
//we dont use promises here b'cause they can be rejected/resolved only a single time, so not possible to run for data changes
//'on' returns (snapshot) => { console.log(snapshot.val()) }) this function, we get it in onValueChange
const onValueChange = database.ref().on('value' , (snapshot) => {
    const val = snapshot.val()
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
})
//This is how we unsusscribe for changes use:
// database.ref().off(onValueChange)


//Mark : FIREBASE DOES NOT SUPPORT ARRAYS : Proof
// const notes = [{
//     id: '23',
//     title : 'This is note 1',
//     description: 'asdf'
// },{
//     id: '212',
//     title : 'This is note 2',
//     description: 'sfkglsf'
// }]
// database.ref('notes').set(notes)


database.ref('expenses').push({
    description : '',
    note : '',
    amount : 1234,
    createdAt : 2345343
})
