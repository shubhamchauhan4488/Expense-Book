import React from 'react'
import ReactDOM from 'react-dom';

//Use of creating HOC : 
//reuse code 
//render Hijacking 
//prop manipulation 
//Abstract state

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p> This is the : {props.info}</p>
    </div>
)

//we use a function that will wrap other components(since we have passed those compoents it this function)
// and will return the Higher order component
const withWarning = (WrappedComponent) => {
    //implicitly returning a HOC
    return (props) => (
        <div>
           {props.showInfo && <p>This is a priveledged and Top Secret info</p>}
           <WrappedComponent {...props}/>

        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.requireAuth ? (
                <WrappedComponent {...props}/>
            ):
            <p>Please login correctly to view the Info</p>}
        </div>
    )
}

const ReturnedHOC = withWarning(Info)//here we can pass many components
//Since we are returning a component ReturnedHOC cannot be 'returnedHOC' caps 'R' is not onle a convention but also necessary

const ReturnedAuthHOC = requireAuthentication(Info)

ReactDOM.render(<ReturnedHOC showInfo = {false} info = "These are the details in this document"/>, document.getElementById('main-div'))
ReactDOM.render(<ReturnedAuthHOC requireAuth = {true} info = "These are the details in this document"/>, document.getElementById('main-div'))


