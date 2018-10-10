import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

export const ExpenseListItem = ({
  dispatch,
  id,
  description,
  category,
  amount,
  createdAt
}) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__subtitle">Category : {category}</span>
      <div className="list-item__subtitle">
        {moment(createdAt).format("MMMM Do, YYYY")}
      </div>
    </div>
    <h3 className="list-item__amount">
      {numeral(amount / 100).format("$0,0.00")}
    </h3>
  </Link>
);

export default ExpenseListItem;
