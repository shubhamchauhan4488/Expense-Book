//These files under actions are behaving as Controller(MVC)
// as it is communicating with database and also dispatching actions to UI components

import uuid from 'uuid'
import database from '../firebase/firebase'

//AddExpense action generator 
//control now goes to the reducer   
// export const addExpense = (
//     { 
//      description = '',
//      note = '', 
//      amount = 0, 
//      createdAt = 0
//     } = {}) => ({
//     type : 'AddExpense',
//     expense : {
//         id : uuid(),
//         description,
//         note : note, //is same as writing just note
//         amount,
//         createdAt
//     }
// })

//Now The defaults have been setup somewhere else and also we no longer ID by uuid, we need firebase id
export const addExpense = (expense) => ({
    type : 'AddExpense',
    expense
    })

export const startAddExpense = (expenseData = {}) => {

    //function returning a fn made possible by redux-thunk
    //This below function is called with redux and has access to dispatch
    return (dispatch) => {
    //we will restructure and setup the defaults over here : 2nd method
    const {
        description = '',
        note = '', 
        amount = 0, 
        createdAt = 0
    } = expenseData;

    const expense = { description ,note ,amount ,createdAt }

    //adding return help us to achieve promise chaining  and call .then while making assertions in test cases
    //then callback for success case gets called with push, and has access to ref
    return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id : ref.key,
                ...expense
            }));
        });
    };
};

export const removeExpense = ({expenseID}) => ({
    type : 'RemoveExpense',
    expenseID
})
export const editExpense = (id ,updates) => ({
    type : 'EditExpense',
    id,
    updates
})

