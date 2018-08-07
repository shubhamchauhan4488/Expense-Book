import React from 'react';
import getVisibleExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'
import { connect } from "react-redux";
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
    const expenseWord = props.expenseCount === 1 ? "expense" : "expenses";
    const formattedAmount = numeral(props.expensesTotal/100).format('0,0.00')
    return (
        <div>
         <h1>Viewing ${props.expenseCount} {expenseWord} totalling ${formattedAmount}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenseCount : getVisibleExpenses(state.expenses, state.filters).length,
        expensesTotal : getExpensesTotal(getVisibleExpenses(state.expenses, state.filters))
    }
};

export default connect(mapStateToProps)(ExpensesSummary)