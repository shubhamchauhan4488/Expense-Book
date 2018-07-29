import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

// test("Should test add expense actin object")


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
    const expenseObjectData = {
        description : 'Rent',
        amount : 110000,
        note : 'Due on last date of this month',
        createdAt : 1000
    }
    const result = addExpense(expenseObjectData);
    expect(result).toEqual({
        type : 'AddExpense',
        expense : {
            ...expenseObjectData,
            id : expect.any(String)
        }
    }
    //expect.any(String) since id is randomly generated, we will compare only its type

    )
}) 

test("Should setup add expense action object WITH provided values", () =>{
    const expenseObjectData = {
        description : '',
        amount : 0,
        note : '',
        createdAt : 0
    }
    const result = addExpense(expenseObjectData);
    expect(result).toEqual({
        type : 'AddExpense',
        expense : {
            ...expenseObjectData,
            id : expect.any(String)
        }
    }
    )
}) 

// test("Should setup edit expense action object", 
