import { createStore , combineReducers } from 'redux';
import uuid from 'uuid';

const expensesReducerDefault = [];
const filtersReducerDefault = {
    text : '',
    sortBy : 'date',
    startDate : undefined, 
    endDate : undefined
}


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
    default : 
    return state;
    }
}
const filtersReducer = (state = filtersReducerDefault, action) => {
    switch (action.type) {
        case 'TextFilter' : 
        return {
            ...state,
            text : action.filterText    
        }
        case 'SORT_BY_DATE' : 
        return {
            ...state,
            sortBy : 'date'
        }
        case 'SORT_BY_AMOUNT' : 
        return {
            ...state,
            sortBy : 'amount'
        }
        case 'SET_START_DATE' : 
        return {
            ...state,
            startDate : action.startDate
        }
        case 'SET_END_DATE' : 
        return {
            ...state,
            endDate : action.endDate
        }
        default : 
        return state;
    }
}


const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const expenseDescriptionLowercase = expense.description.toLowerCase();
        const textMatch = expenseDescriptionLowercase.includes(text.toLowerCase());
    
    
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1 //meaning most recent will appear first : here , 'b'
        }else if(sortBy === 'amount') {
            return a.amount > b.amount ? 1 : -1 //greater amount comes first 
        }
    })

}
const store = createStore(
    combineReducers({
        expenses : expensesReducer,
        filters : filtersReducer
    })
)



const demoState = {
    expenses : [{
        id : "asdfsafasd",
        description : 'Grocery Bill',
        note : 'Common grocery for all',
        amount : 1230,  //later will adjust the decimal
        creditedAt : 0

    }],
    filters : {
        text : 'Bill',
        sortBy : 'amount', //date or amount
        startDate : undefined,
        endDate : undefined
    }
}

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})


//AddExpense action generator 
//control now goes to the reducer   
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type : 'AddExpense',
    expense : {
        id : uuid(),
        description,
        note : note, //is same as writing just note
        amount,
        createdAt
    }
})
const removeExpense = ({expenseID}) => ({
    type : 'RemoveExpense',
    expenseID
})
const editExpense = (id ,updates) => ({
    type : 'EditExpense',
    id,
    updates
})
const setTextFilter = ({filterText = ''} = {}) => ({
    type : 'TextFilter',
    filterText
})
const sortByAmount = () => ({
    type : 'SORT_BY_AMOUNT'
})
const sortByDate = () => ({
    type : 'SORT_BY_DATE'
})
const setStartDate = (startDate) => ({
    type : 'SET_START_DATE',
    startDate
})
const setEndDate = (endDate) => ({
    type : 'SET_END_DATE',
    endDate
})

//calling the action generator
const expenseOne = store.dispatch( addExpense({description : 'Grocery Bill', note : 'Common grocery for all', amount :1230, createdAt : -1000}))
const expenseTwo = store.dispatch( addExpense({description : 'Hydro Bill', amount :1111, createdAt : 1000}))


// store.dispatch (removeExpense({expenseID : expenseTwo.expense.id}))
// store.dispatch(editExpense(expenseOne.expense.id, {amount : 2222}))
// store.dispatch(setTextFilter({filterText : 'grocery '}));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
store.dispatch(setEndDate(1200));    