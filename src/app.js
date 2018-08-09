// installing , importing and using npm modules
// import validator from 'validator';
// console.log(validator.isEmail('shubham@gmail.com')); //using 'validator' which is an npm module/
//File size will increase with very imoprt  of npm modules

//These are default imports
import React from 'react'
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

import AppRouter, { history } from './routers/AppRouter'//now we can use history.push just like used in components
import { startSetExpenses } from './actions/expenses'
import { login, logout } from './actions/auth'
import getVisibleExpenses from './selectors/expenses'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import 'react-dates/lib/css/_datepicker.css'
//Just to check the connection to firebase : 
import { firebase } from './firebase//firebase'
// import './playground/promises'


const store = configureStore();
// store.dispatch(addExpense( {description : 'Gas Bill', amount : '5555', createdAt : 908049}))
// store.dispatch(addExpense( {description : 'Internet Bill', amount : '4455', createdAt : 432389}))
// store.dispatch(addExpense( {description : 'Rent', amount : '110000', createdAt : 209328}))
console.log(store.getState());


// -- All this below is now not required after we have setup <input> for filters
// store.dispatch(setTextFilter('gas'))
// store.dispatch(setTextFilter('bill'))
// setTimeout(()=>{
//     store.dispatch(setTextFilter('bill'))
// }, 4000)

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses)

//this is just a variable returning some jsx , not a stateless functional component
const jsx = (
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render(<p>Loading...</p> , document.getElementById('main-div'));

let rendered = false;
const renderApp = () => {
    if(!rendered){
        ReactDOM.render(jsx , document.getElementById('main-div'));
        rendered = true;
    }
}

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        //We are dispatching login and logout here and not where we are declaring asynchronous actions b'cause 
        //sometimes the user may be logged in and we need to direct him to dashboard, 
        //the asynch actions will only be called if someone explicitly logs in and logs out, not when user us implicity logged in i. already logged in
        store.dispatch(login(user.uid))
        //.then(()=>{}) has only been made possible by 'return database.ref.....' in actions/startSetExpenses
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp();
        });

        if(history.location.pathname === '/'){
            history.push('/dashboard');
        }

    }else{
        store.dispatch(logout())
        renderApp()
        console.log('Logged out')
        history.push('/')
    }
})
