const expensesReducerDefault = [];

const expensesReducer = (state = expensesReducerDefault, action) => {
    switch(action.type) {  
        case 'AddExpense' : 
        return [...state, action.expense]
  
        case 'RemoveExpense' : 
        return state.filter(({id}) => {
            return id !== action.expenseID
        }  )
        //if filter returns true the item will be kept in the array else it will be removed
        case 'EditExpense' : 
        return state.map((expense) => {
            if(expense.id == action.id){
                return{
                    ...expense,
                    ...action.updates //spreading the object, the new value of amount will override the old value
                }
            }else{
                return expense
            }
        })
        case 'SetExpenses' :
            return action.expenses
    default : 
    return state;
    }
}
export default expensesReducer;