import React from 'react'

//Making Option a stateless component
// If we need to pass an argument to a function we need to define event in the arrow function in the onCLick
const Option = (props) =>
{
    return(
        <div className = "option">
        <p className = "option__text">{props.count}. {props.optionText}</p> 
            <button className = "button button--link"
            onClick = {(e) => {
                props.handleDeleteAllOption(props.optionText)
            }}>
            Remove
            </button>
        </div>
    );
}
//IMplicitly returning JSX 
// const Option = (props) =>(
//         <div>
//             {props.optionText} 
//             <button onClick = {(e) => {
//                 props.handleDeleteAllOption(props.optionText)
//             }}>Remove</button>
//         </div>
//     );

export default Option;

        // class Option extends React.Component{
        //     render(){
        //         return(
        //             <div>
        //                 {this.props.optionText}
        //             </div>
        //         );
        //     }
        // }

