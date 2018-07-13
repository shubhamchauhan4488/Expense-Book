import React from 'react'; //this is required because JSX is converted to react.createElement calls
import Option from './Option'

//Making Options a stateless component
const Options = (props) =>
{
     // button--link is the modifier of the button class
    return(
        <div>
        <div className = "widget-header">
            <h3 className ="widget-header__title">Your Options</h3>
            <button className = "button button--link"
            onClick={props.handleDeleteAllOptions}
            >Remove All
            </button>
        </div>
            {props.options.length === 0 && <p className = "widget-message">Please Add an option to get started!</p>}
            {props.options.map((option, index) => (
                <Option key={option} 
                optionText = {option}
                count = {index + 1}
                handleDeleteAllOption = {props.handleDeleteAllOption}
                />
            ))
            }   
        </div>
    );
}

export default Options;