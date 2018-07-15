import { BrowserRouter, Route, NavLink, Link, Switch} from 'react-router-dom';
import React from 'react';
import Header from './../components/Header';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import AddExpensePage from './../components/AddExpensePage';
import EditExpensePage from './../components/EditExpensePage';
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFoundPage';


//switch : it works same as switch case, if no option matches it renders the default one, here the one with no path mentioned 
// exact = {true} means that we have to match "/" with this "/" only

const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header/>
    <Switch>
        <Route path = "/" component = {ExpenseDashboardPage} exact = {true}/> 
        <Route path = "/create" component = {AddExpensePage} /> 
        <Route path = "/edit" component = {EditExpensePage} /> 
        <Route path = "/help" component = {HelpPage} /> 
        <Route component = {NotFoundPage} />
    </Switch>
    </div>
    </BrowserRouter>
)

export default AppRouter;