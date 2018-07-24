// installing , importing and using npm modules
// import validator from 'validator';
// console.log(validator.isEmail('shubham@gmail.com')); //using 'validator' which is an npm module/
//File size will increase with very imoprt  of npm modules

//These are default imports
import React from 'react'
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import AppRouter from './routers/AppRouter'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'


const store = configureStore();
store.dispatch(addExpense( {description : 'Gas Bill', amount : '5555', createdAt : 908049}))
store.dispatch(addExpense( {description : 'Internet Bill', amount : '4455', createdAt : 432389}))
store.dispatch(addExpense( {description : 'Rent', amount : '110000', createdAt : 209328}))
console.log(store.getState());


// -- All this below is now not required after we have setup <input> for filters
// store.dispatch(setTextFilter('gas'))
// store.dispatch(setTextFilter('bill'))
// setTimeout(()=>{
//     store.dispatch(setTextFilter('bill'))
// }, 4000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

//this is just a variable returning some jsx , not a stateless functional component
const jsx = (
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
)


ReactDOM.render(jsx , document.getElementById('main-div'));


