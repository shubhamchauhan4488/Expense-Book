import React from 'react';

export default class AddOptions extends React.Component{
    state = {
        error : undefined
    }
    // 
    handleSubmit = (e) => {
        e.preventDefault(); 
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleOption(option);
        e.target.elements.option.value = '';
        this.setState(() => {
            return { 
                error : error
            }
        })
    }
    render(){
        return(
            <div>
            {this.state.error && <p className = "option__error">{this.state.error}</p>}
                <form className ="add-option"
                onSubmit = {this.handleSubmit}>
                    <input className ="add-option-input"
                    type='text' name = 'option'></input>
                    <button className = "button">Add Option</button>
                </form>
             </div>
        );
    }
}