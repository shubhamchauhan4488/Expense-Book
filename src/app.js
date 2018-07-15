// installing , importing and using npm modules
// import validator from 'validator';
// console.log(validator.isEmail('shubham@gmail.com')); //using 'validator' which is an npm module/
//File size will increase with very imoprt  of npm modules

//These are default imports
import React from 'react'
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import AppRouter from './routers/AppRouter'

ReactDOM.render(<AppRouter/> , document.getElementById('main-div'));


