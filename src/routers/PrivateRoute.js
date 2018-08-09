import React from 'react';
import { connect } from "react-redux";
import { Route,Redirect } from 'react-router-dom';
import Header from './../components/Header';

export const PrivateRoute = (
    {
        isAuthenticated,
        component : Component,  //Renaming component b'cause it is going to be rendered
        ...rest  //rest operator : to avoid specifying individual props like 'path', 'exact'
        // and yet getting them with same name as specified in <PrivateRouter/>
    }
) => (
    //Now we have to pass the props down to Route based on conditional logic
    //using 'rest' to pass path,exact
    <Route {...rest} component = {(props) => (  //using props to pass things like 'history', props that need to be passed to route
        isAuthenticated ? (
             //spreading and passing props like 'history'
            //if user is authenticate then we make component = <Component> and whatever was passed will be rendered
            <div>
                    <Header/>
                    <Component  {...props}/> 
            </div>
        ) : (
            <Redirect to = '/'/>
        )
    )}/>
)

const mapStateToProps = (state) => ({
    isAuthenticated : !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute)