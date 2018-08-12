import React from 'react';
import getVisibleExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'
import { connect } from "react-redux";
import numeral from 'numeral';
import { Link } from "react-router-dom";

export const ExpensesSummary = (props) => {
    const expenseWord = props.expenseCount === 1 ? "expense" : "expenses";
    const formattedAmount = numeral(props.expensesTotal/100).format('0,0.00')
    return (
        <div className = "page-header">
            <div className ="container">
                <h1 className="page-header__title">Viewing <span>{props.expenseCount}</span> {expenseWord} totalling <span>${formattedAmount}</span></h1>
                <div className = "page-header__action">
                     <Link className = "button" to = "/create">Add Expense</Link>
                </div>
            </div>
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