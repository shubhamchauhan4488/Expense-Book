import uuid from 'uuid'

//AddExpense action generator 
//control now goes to the reducer   
export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type : 'AddExpense',
    expense : {
        id : uuid(),
        description,
        note : note, //is same as writing just note
        amount,
        createdAt
    }
})
export const removeExpense = ({expenseID}) => ({
    type : 'RemoveExpense',
    expenseID
})
export const editExpense = (id ,updates) => ({
    type : 'EditExpense',
    id,
    updates
})

