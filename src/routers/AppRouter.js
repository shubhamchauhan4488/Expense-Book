import { Router, Route, NavLink, Link, Switch} from 'react-router-dom';
//Below is the function we use to create our own history
import createHistory from "history/createBrowserHistory";
import React from 'react';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import AddExpensePage from './../components/AddExpensePage';
import EditExpensePage from './../components/EditExpensePage';
import NotFoundPage from './../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute'

//exporting and accessing anywhere
export const history = createHistory();

//switch : it works same as switch case, if no option matches it renders the default one, here the one with no path mentioned 
// exact = {true} means that we have to match "/" with this "/" only

const AppRouter = () => (
    // <BrowserRouter> //This already has history built-in, to manually access history anywhere we like do:
    <Router history = {history}>
    <div>
    <Switch>
        <Route path = "/" component = {LoginPage} exact = {true}/> 
        <PrivateRoute path = "/dashboard" component = {ExpenseDashboardPage} /> 
        <PrivateRoute path = "/create" component = {AddExpensePage} /> 
        <PrivateRoute path = "/edit/:id" component = {EditExpensePage} /> 
        <Route component = {NotFoundPage} />
    </Switch>
    </div>
    </Router>
)
//Note : 
// :id this way we can  pass params in props and access using props.match.params.id
// Private route is used so that no one can directly access the URL to other pages, like when they are logged out
export default AppRouter;