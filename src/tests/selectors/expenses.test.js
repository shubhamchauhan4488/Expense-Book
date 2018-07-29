import getVisibleExpenses from '../../selectors/expenses'
import moment from 'moment'

const expenses = [{
    id : '1',
    description: 'Gum',
    note : '',
    amount : 195,
    createdAt : 0
},
{
    id : '2',
    description: 'Rent',
    note : '',
    amount : 131245,
    createdAt : moment(0).subtract(4, 'days').valueOf()
},
{
    id : '3',
    description: 'Credit Card',
    note : '',
    amount : 4500,
    createdAt : moment(0).add(4, 'days').valueOf()
    //add(4, 'days') adds days from Jan 1 1970
    //valueOf() : to get the number 
}];

test("Should filter by text value", () => {
    const filters = {
        text : 'e',
        sortBy : 'date',
        startDate : undefined,
        endDate : undefined
    }   
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[2],expenses[1]])
})

test("Should filter by startDate value", () => {
    const filters = {
        text : '',
        sortBy : 'date',
        startDate : moment(0),
        endDate : undefined
    }
    const result = getVisibleExpenses(expenses, filters)
    //accordin to sort by date which was created latest will be shown first:
    //so below output is expected
    expect(result).toEqual([expenses[2],expenses[0]])
})

test("Should filter by endDate value", () => {
    const filters = {
        text : '',
        sortBy : 'date',
        startDate : undefined,
        endDate : moment(0)
    }
    const result = getVisibleExpenses(expenses, filters)
    //accordin to sort by date which was created latest will be shown first:
    //so below output is expected
    expect(result).toEqual([expenses[0],expenses[1]])
})

test("Should sort by date", () => {
    const filters = {
        text : '',
        sortBy : 'date',
        startDate : undefined,
        endDate : undefined
    }
    const result = getVisibleExpenses(expenses, filters)
    //accordin to sort by date which was created latest will be shown first:
    //so below output is expected
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]])
})

test("Should sort by amount", () => {
    const filters = {
        text : '',
        sortBy : 'amount',
        startDate : undefined,
        endDate : undefined
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[1],expenses[2],expenses[0]])
})