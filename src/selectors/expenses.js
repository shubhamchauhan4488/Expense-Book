import moment from 'moment'

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        // const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        // const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const createdAtMomentObject = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMomentObject, 'day') :true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMomentObject, 'day') :true;
        const expenseDescriptionLowercase = expense.description.toLowerCase();
        const textMatch = expenseDescriptionLowercase.includes(text.toLowerCase());
    
    
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1 //meaning most recent will appear first : here , 'b'
        }else if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1 //greater amount comes first 
        }
    })

}

export default getVisibleExpenses;