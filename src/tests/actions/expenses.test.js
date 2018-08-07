import configureMockStore from 'redux-mock-store'
import thunk from "redux-thunk";
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses'
import expensesArray from '../testData/expenses'
import database from '../../firebase/firebase'
// test("Should test add expense actin object")

const createMockStore = configureMockStore([thunk]) //passing the middleware that we are using

//toEqual is used to compare all the properties in side an object 
// if we use === it will not work, as {} === {} also returns false
test("Should setup remove expense action object", () => {
    const result = removeExpense({expenseID : '123asdf'})
    expect(result).toEqual({
        type : 'RemoveExpense',
        expenseID: '123asdf'
    })
})


test("Should setup edit expense action object", () => {
    const result = editExpense('123asdf', { amount : 2143 })
    expect(result).toEqual({
        type : 'EditExpense',
        id: '123asdf',
        updates : { amount : 2143 }
    })
})

test("Should setup add expense action object WITH provided values", () =>{
    const expenseObjectData = expensesArray[2];
    const result = addExpense(expenseObjectData);
    expect(result).toEqual({
        type : 'AddExpense',
        expense : expensesArray[2]
    }
    //expect.any(String) since id is randomly generated, we will compare only its type

    )
}) 

test("Should add expense to database and redux store", (done) => {
    //we will be creating a mock redux store for this 
    const store = createMockStore({});
    const expenseData = {
        description : 'Water Bill',
        note : 'to be shared by all',
        amount : 423,
        createdAt : 1324543
    }
    //Problem is we can only assert when the firebase is done adding the data, how do we know abot tht
    store.dispatch(startAddExpense(expenseData)).then( () => {
        // expect(1).toBe(3) //should have failed,
        // then( () => {
        //     expect(1).toBe(3) 
        // }) does not run untill firebase completes its task nd databse.push returns
        // SO we need to force JEST to wait untill this time :
        // so we use 'return' for all firebase database calls and convert them to promises

        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type : 'AddExpense',
            expense : {
                id :  expect.any(String),
                ...expenseData
            }
        })

        //For promise chaining
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
     
    })
    .then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done();
    })
    .catch((e) => {
        console.log("ERROR IS HERE ::::", e )
        })
})


test("Should add expense to database and redux store WITH DEFAULT values", (done) => {
    //we will be creating a mock redux store for this 
    const store = createMockStore({});
    const expenseDefaultData = {
        description : '',
        note : '',
        amount : 0,
        createdAt : 0
    }
  
    store.dispatch(startAddExpense(expenseDefaultData)).then( () => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type : 'AddExpense',
            expense : {
                id :  expect.any(String),
                ...expenseDefaultData
            }
        })

        //For promise chaining
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
     
    })
    .then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaultData)
        done();
    })
    .catch((e) => {
        console.log("ERROR IS HERE ::::", e )
        })
})


// test("Should setup add expense action object WITH default values", () =>{
//     const expenseObjectData = {
//         description : '',
//         amount : 0,
//         note : '',
//         createdAt : 0
//     }
//     const result = startAddExpense(expenseObjectData);
//     expect(result).toEqual({
//         type : 'AddExpense',
//         expense : {
//             ...expenseObjectData,
//             id : expect.any(String)
//         }
//     }
//     )
// }) 

// test("Should setup edit expense action object", 
