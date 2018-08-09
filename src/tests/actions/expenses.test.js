import configureMockStore from 'redux-mock-store'
import thunk from "redux-thunk";
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from '../../actions/expenses'
import expensesArray from '../testData/expenses'
import database from '../../firebase/firebase'
// test("Should test add expense actin object")

const createMockStore = configureMockStore([thunk]) //passing the middleware that we are using
const uid = '123asdf'
const defaultAuthState = { auth : { uid : uid } };


beforeEach((done) =>{
    const expensesFirebaseData = {}
    expensesArray.forEach(( { id,description,amount,note,createdAt } ) => {
        expensesFirebaseData[id] = {
            id : id,
            description : description,
            amount : amount,
            note : note,
            createdAt : createdAt
        }
    })
    //To allow the beforeEach to wait for data pushing to firebase
    database.ref(`users/${uid}/expenses`).set(expensesFirebaseData).then(() => {
    done();
    })
})


//toEqual is used to compare all the properties in side an object 
// if we use === it will not work, as {} === {} also returns false
test("Should setup remove expense action object", () => {
    const result = removeExpense({expenseID : '123asdf'})
    expect(result).toEqual({
        type : 'RemoveExpense',
        expenseID: '123asdf'
    })
})
test("Should remove expense from firebase", (done) => {
    const id = expensesArray[2].id
    const store = createMockStore(defaultAuthState);
    store.dispatch(startRemoveExpense(id)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type : 'RemoveExpense',
            expenseID : id
        })
    //'return' for chaining promise with 'then((sanpshot))
    return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
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
test("Should edit expense on firebase", (done) => {
    const store = createMockStore(defaultAuthState);
    const actions = store.getActions();
    // const updates = { amount : 1234 }
    store.dispatch(startEditExpense(expensesArray[2].id, expensesArray[2])).then(() => {
        expect(actions[0]).toEqual({
            type : 'EditExpense',
            id : expensesArray[2].id,
            updates : expensesArray[2]
        })
        return database.ref(`users/${uid}/expenses/${expensesArray[2].id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual({
            id : expensesArray[2].id,
            ...expensesArray[2]
        })
        done(); 
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
    const store = createMockStore(defaultAuthState);
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
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
     
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
    const store = createMockStore(defaultAuthState);
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
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
     
    })
    .then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaultData)
        done();
    })
    .catch((e) => {
        console.log("ERROR IS HERE ::::", e )
        })
})

test("Should setup set expense action object with data passed", () => {
    const result = setExpenses(expensesArray);
    expect(result).toEqual({
        type : 'SetExpenses',
        expenses : expensesArray
    })
})

test("Should fetch the data from firebase", (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();

        // This is where the beforeEach will com into play. 
        expect(actions[0]).toEqual({
            type : 'SetExpenses',
            expenses : expensesArray
        }); 
        done();
    });
});


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
