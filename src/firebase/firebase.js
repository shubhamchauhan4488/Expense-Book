import * as firebase from 'firebase';
// * as : takes all the name exports and we create a new variable for them i.e firebase
// Now we can access all naned export using dot operator like : firebase.
// EG :import * as expensesactions from '../actions/expenses'
// expensesactions.

var config = {
    //using the public varibales defined in webpack.DefinePlugin
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
//to make the connection
firebase.initializeApp(config);
const database = firebase.database()

//Setting up firebase to authenticate with google
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default }

// database.ref('expenses').push({
//     description : 'Rent',
//     note : '',
//     amount : 142,
//     createdAt : 2345343
// })


//This is one popular way we suscribe to array based data
// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id : childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })

// //Other Ways :
// //Success callback being called with the snapshot is this (snapshot) => {}
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// //Fires for every child which is there is Firebase and for the new ones that are added  
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })