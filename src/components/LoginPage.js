import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LoginPage = ({ startLogin }) => (
  <div className="container__main">
    <div className="page-header__login">
      <h1 className="box-layout__title ">ExpenseBook</h1>
      <img src="/images/expense-book-icon.png" width="30px" height="30" />
    </div>
    <div className="box-layout">
      <div className="box-layout__loginbox">
        <p> It's time to log your expenses and manage them</p>
        <button onClick={startLogin} className="button">
          Login with Google
        </button>
      </div>
    </div>
  </div>
);
const mapDispatchToProps = dispatch => ({
  //dispatching the startLogin action imported above
  startLogin: () => {
    dispatch(startLogin());
  }
});
export default connect(undefined,mapDispatchToProps)(LoginPage);
   