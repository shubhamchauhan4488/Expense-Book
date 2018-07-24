import React from 'react'
import { Link } from "react-router-dom";

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt}) => (
    <div>
    <Link to = {`/edit/${id}`}>
        <h3>{description}</h3>
    </Link>
        <p>{amount} - {createdAt}</p>
    </div>
)

export default ExpenseListItem
//we are exporting the connected component 
//but here we dont need access to the state so we can use only connect(), it will give us access to dispatch prop