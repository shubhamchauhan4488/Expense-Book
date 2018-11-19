import React from 'react';
import { NavLink } from "react-router-dom";
 
// <a href = "/">Go Home</a> will make a full page refresh. Instead we should use Link from React-router
const NotFoundPage = () => (
    <div>
    Error 404! Page was not found. <NavLink to = '/' activeClassName = "is-active">Dashboard </NavLink> 
    </div>
)

export default NotFoundPage;
