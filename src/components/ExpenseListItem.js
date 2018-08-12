import React from 'react'
import { Link } from "react-router-dom";
import moment from 'moment'
import numeral from 'numeral'

export const ExpenseListItem = ({ dispatch, id, description, amount, createdAt}) => (
    <Link className = "list-item" to = {`/edit/${id}`}>
    <div>
        <h3>{description}</h3>
        <span>{numeral(amount/100).format('$0,0.00')}</span>
        </div>
        <h3> {moment(createdAt).format('MMMM Do,YYYY')}</h3>
    </Link>
)

export default ExpenseListItem
//we are exporting the connected component 
//but here we dont need access to the state so we can use only connect(), it will give us access to dispatch prop