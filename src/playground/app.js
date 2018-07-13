import AddOptions from './components/AddOptions'

// const obj = {
//     name : 'Vikram',
//     getName(){
//         return this.name;
//     }
// };
// const getName = obj.getName;
// console.log(getName()); // will give an error : name not found 
//because we have transferred the reference of the method to 'getName' but reference of object is non=transferable
//Solution
// const getName = obj.getName.bind(obj);
// console.log(getName());


//For making the react components more flexible we can pass data into them using key, value pairs and accessing using props
class IndecisionApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            options : props.options
            //By giving props.options we are enabling to give some initial values according to our choice 
            //Eg we can pass names of friends in the render call, or names of Erands etx
        }
        this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleOption = this.handleOption.bind(this);
        this.handleDeleteAllOption = this.handleDeleteAllOption.bind(this);
    }
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
    handleDeleteAllOptions(){
        this.setState(()=>{
            return {
                options : []
            };
        });
    }
    handleDeleteAllOption(optionToRemove){
        this.setState((prevState) => ({
            options : prevState.option.filter((option) => {
                return optionToRemove !== option;
            })
        }))
    }
    handlePick(){
        const randomOption = Math.floor(Math.random() * this.state.options.length);
        //Math.random will give number between 0 and 1
        console.log(randomOption);
        const option = this.state.options[randomOption];
        alert(option);
    }
    handleOption(option){
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
                <Action hasOption={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options options = {this.state.options} handleDeleteAllOptions ={this.handleDeleteAllOptions} handleDeleteAllOption = {this.handleDeleteAllOption}/>
                <AddOptions handleOption ={this.handleOption}/>
             </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options : []
};



//Making Header a stateless functional component
const Header = (props) =>
{
    return (
        <div> 
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
        );
}
Header.defaultProps = {
    title : 'Indecision' //Setting the default valu of the title    
}

    // Component is a React Class. With React components We have to define a method here render()
    // With es6 classes we can have zero methods
        // class Header extends React.Component{
        //     //Component is a React Class. With React components We have to define a method here render()
        //     //With es6 classes we can have zero methods
        //     render(){
        //         return (
        //         <div>
        //             //THIS IS THE REFERENCE TO THE CURRENT INSTANCE OF THIS Component   
        //             <h1>{this.props.title}</h1>
        //             <h2>{this.props.subtitle}</h2>
        //         </div>
        //         );
        //     }
        // }

 //Making Action a stateless functional component
const Action = (props) =>
{
    return(
        <div>
        <button onClick = {props.handlePick}
        disabled = {!props.hasOption }>What should I do</button>
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

//Making Options a stateless component
const Options = (props) =>
{
    return(
        <div>
        
        <button onClick={props.handleDeleteAllOptions}>Remove All</button>
        {props.options.length === 0 && <p>Add an option to get started!</p>}
        {props.options.map((option) => (
            <Option key={option} 
            optionText = {option}
            handleDeleteAllOption = {props.handleDeleteAllOption}
            />
         ))
        }   
        </div>
    );
}
        // class Options extends React.Component{
        //     // constructor(props)
        //     // {super(props);
        //     //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
        //     // }
        //     // handleRemoveAll(){
        //     //     console.log(this.props.options);
        //     //     //  Will give error if we dont bind 'this' : cannot find 'props'
        //     //     // alert("Removed"); 
        //     // }
        //     //Only for render the 'this' is bind to the instance of the class. 
        //     // /For methods inside the class we need to bind them separately using constructor
        //     //We could have binf inside the render like :
        //     // <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button> but this will bind every time we re render which is inefficient
        //     render(){
        //         return(
        //             <div>
        //             <button onClick={this.props.handleDeleteAll}>Remove All</button>
        //             {this.props.options.map((option) => {
        //                     return <Option key={option} optionText = {option}/>
        //                 } )
        //             }
        //             </div>
        //         );
        //     }
        // }

//Making Option a stateless component
// If we need to pass an argument to a function we need to define event in the arrow function in the onCLick
const Option = (props) =>
{
    return(
        <div>
            {props.optionText}
          
            <button onClick = {(e) => {
                props.handleDeleteAllOption(props.optionText)
            }}>Remove</button>
        </div>
    );
}

        // class Option extends React.Component{
        //     render(){
        //         return(
        //             <div>
        //                 {this.props.optionText}
        //             </div>
        //         );
        //     }
        // }



//Now this has no use
// const jsx = (
//     <div>
//         <h1>Title</h1>
//         <Header />
//         <Action />
//         <Options />
//         <AddOptions />
//     </div>
// );

ReactDOM.render(<IndecisionApp options = {['Distribute cards', 'Rum 10 kms']}/> , document.getElementById('main-div'));