
const getExpensesTotal = (expenses) => {
    if (expenses.length === 0){
        return 0;
    }
    else{
        // return expenses.map((expense) => {return expense.amount})
        // .reduce((sum, value) => {
        //         return sum + value
        //     }, 0)
            //where 0 is the initial accumultaor value

        return expenses.map((expense) =>  expense.amount)
        .reduce((sum, value) =>  sum + value, 0)
    }
}

export default getExpensesTotal