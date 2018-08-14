import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth'

//exporting non connected component for testing purpose
export const Header= ({startLogout}) => (
    <div className = "header">
         <div className = "container">
            <div className = "header__content">
                <Link to = '/dashboard' className = "header__title" >
                    <h1>ExpenseBook</h1>
                </Link> 
                <button className= "button button--link" onClick = {startLogout}>Logout</button>
            </div>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout : () => { dispatch(startLogout())}
})

export default connect(undefined, mapDispatchToProps)(Header);