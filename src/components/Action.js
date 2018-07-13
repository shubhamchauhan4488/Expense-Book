 import React from 'react'

 //Making Action a stateless functional component
 const Action = (props) =>
 {
     return(
         <div>
         <button className = "big-button"
         onClick = {props.handlePick}
         disabled = {!props.hasOption }>
         What should I do
         </button>
         </div>
     );
 }
 
 
         // class Action extends React.Component{
         //     render(){
         //         return(
         //             <div>
         //             <button onClick = {this.props.handlePick}
         //             disabled = {!this.props.hasOption }>What should I do</button>
         //             </div>
         //         );
         //     }
         // }
 export default Action;