import expensesReducer from '../../reducers/expenses'
import expensesArray from '../testData/expenses'
import moment from 'moment'

test("should test default expense reducer expense", () =>{
    const result = expensesReducer(undefined, { type : 'INIT'});
    expect(result).toEqual([]);
})


test("should test add expense reducer", () =>{

    const addExpenseActionObject  = {
        type : 'AddExpense',
        expense : {
            description : 'Gas Bill', 
            amount : '5555', 
            createdAt : 908049
        }
    }

    const result = expensesReducer(expensesArray, addExpenseActionObject);
    expect(result).toEqual([...expensesArray, addExpenseActionObject.expense ] );
})

test("should test edit expense reducer, when passed with valid ID", () =>{

    const updatesExpenseActionObject  = {
        type : 'EditExpense',
        id : '3',
        updates : {
            amount : '4444'
            }
    }

    const result = expensesReducer(expensesArray, updatesExpenseActionObject);
    expect(result[2].amount).toBe('4444');
})
test("should test edit expense reducer, when passed with INVALID ID", () =>{

    const updatesExpenseActionObject  = {
        type : 'EditExpense',
        id : '-3',
        updates : {
            amount : '4444'
            }
    }

    const result = expensesReducer(expensesArray, updatesExpenseActionObject);
    expect(result).toEqual(expensesArray);
})

test("should remove expense provided we give valid ID", () =>{

    const removeExpenseActionObject  = {
        type : 'RemoveExpense',
        expenseID : expensesArray[1].id
    }

    const result = expensesReducer(expensesArray, removeExpenseActionObject);
    expect(result).toEqual( [expensesArray[0], expensesArray[2]] );
})

test("should remove expense provided we DONT give valid ID", () =>{

    const removeExpenseActionObject  = {
        type : 'RemoveExpense',
        expenseID : '5'
    }

    const result = expensesReducer(expensesArray, removeExpenseActionObject);
    expect(result).toEqual( expensesArray );
})

test("Should test set expense reducer", () => {
    const setExpenseActionObject = {
        type : 'SetExpenses',
        expenses : [expensesArray[1]]
    }

    const result = expensesReducer(expensesArray, setExpenseActionObject)
    expect(result).toEqual( [expensesArray[1]] );
})