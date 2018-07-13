import React from 'react'
import AddOptions from './AddOptions'
import Options from './Options'
import Action from  './Action'
import Header from './Header'
import OptionModal from './OptionModal'

//For making the react components more flexible we can pass data into them using key, value pairs and accessing using props
class IndecisionApp extends React.Component{
    state = {
            options : [],
            selectedOption : undefined
            //By giving props.options we are enabling to give some initial values according to our choice 
            //Eg we can pass names of friends in the render call, or names of Erands etx
        }
    // constructor(props){
    //     super(props)
        // this.state = {
        //     options : props.options
        //     //By giving props.options we are enabling to give some initial values according to our choice 
        //     //Eg we can pass names of friends in the render call, or names of Erands etx
        // }
        // this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this);
        // this.handlePick = this.handlePick.bind(this);
        // this.handleOption = this.handleOption.bind(this);
        // this.handleDeleteAllOption = this.handleDeleteAllOption.bind(this);
    // }
    componentDidMount() {
        //Using try catch because the data we are parsing can be invalid JSON onject like ['1233'} 
        try{
            const storage = localStorage.getItem('options');
            const options = JSON.parse(storage);
            if(options){
        this.setState( () => ({options}));
            }
        console.log('Component mounted')
        }catch(e){

        }  
      }
    componentDidUpdate(prevState, prevProps){
        if(prevState.options.length !== this.state.options){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options',json);
        console.log('Component updated');
    }
        //u have access to this.props this.state for new state and props
    }
    componentWillUnmount(){
        console.log('Component unmounted');
        //Will be used when we will navigate to some other page     
    }   
    handleDeleteAllOptions = () =>{
        this.setState(()=>{
            return {
                options : []
            };
        });
    }
    handleDeleteAllOption = (optionToRemove) =>{
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
    }
    handlePick = () =>{
        const randomOption = Math.floor(Math.random() * this.state.options.length);
        //Math.random will give number between 0 and 1
        console.log(randomOption);
        const option = this.state.options[randomOption];
        this.setState(() => ({
            selectedOption : option
        }));
    }
    handleModalPress = () => {
        this.setState(() => ({
            selectedOption : undefined
        }));
    }
    handleOption = (option) =>{
        if(!option){
            return 'You need to enter something'
        }else if(this.state.options.indexOf(option) > -1)
        //indexOf returns -1 when there is no item in the array
        {
            return 'Item already exists in your list'
        } //if something is already there 

            // this.setState((prevState) => {
            //     return {
            //         //it can be done as prevState.options.push(option) but it will make changes in the actual original array 'options'
            //         //whereas .concat will make a new copy
            //         options : prevState.options.concat(option)
            //     }
            // })

        //Shorthand notation for this.setState
        this.setState( (prevState) => (
            {options : prevState.options.concat(option)})
        ); //for an implicit 'return' keyword we place () and returning an obj we place {}
    }
    render(){

        const subtitle = 'Put your life in the hands of a computer';
        return(
            <div>
                <Header subtitle={subtitle}/>
                <div className = "container ">
                    <Action 
                    hasOption={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                    />
                    <div className = "widget-header__options">
                        <Options 
                        options = {this.state.options} 
                        handleDeleteAllOptions ={this.handleDeleteAllOptions} 
                        handleDeleteAllOption = {this.handleDeleteAllOption}
                        />
                        <AddOptions 
                        handleOption ={this.handleOption}
                        />
                    </div>
                </div>
                <OptionModal 
                selectedOption = {this.state.selectedOption}
                handleModalPress = {this.handleModalPress}/>
             </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options : []
};

export default IndecisionApp;
