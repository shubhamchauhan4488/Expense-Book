import React from 'react';
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth';

export const LoginPage = ({startLogin}) => (
    <div className = "box-layout">
        <div className ="box-layout__loginbox">
            <h1 className = "box-layout__title "> Expensify</h1>
            <p> It's time to plan your expenses and control them</p>
            <button onClick = {startLogin} className = "button">Login with Google</button>
        </div>
    </div>
)
const mapDispatchToProps = (dispatch) => ({
    startLogin : () => { dispatch(startLogin())  }
})
export default connect(undefined ,mapDispatchToProps)(LoginPage);