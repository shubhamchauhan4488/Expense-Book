import moment from 'moment'

 const expensesArray = [{
    id : '1',
    description: 'Gum',
    note : 'asd',
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
export default expensesArray