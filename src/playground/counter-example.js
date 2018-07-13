class Counter extends React.Component{
    constructor(props){
        super(props);
        this.count = 1;
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
        //In the state object we declare all items that we need to keep track of
        this.state = {
            count: props.count,
        };
    }
    componentDidMount(){
        console.log('component Did Mount')
        const countStringFromLocal = localStorage.getItem('count');
        const count = parseInt(countStringFromLocal, 10);
        if(!isNaN(count)){
            this.setState(() => ({count : count}));
        }
    }
    componentDidUpdate(prevState, prevProps){
        console.log('component Did Update')
        if(prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count);
        }

    }
    handleIncrement(){
        //We have updater function for changing and rendering it again
        this.setState((prevState) => {
            return{
                count : prevState.count + 1
                //we are not updating the state object completly, we are just updating some of its values
            };
        });
    }
    handleDecrement(){
        this.setState((prevState) => {
            return {
                count : prevState.count - 1
            };
        });
    }
    handleReset(){
        this.setState(() => {
            return {
                count : 0
            };
        });


        //This depicts the asynchronous calls . Since this is Javasccript, the code will be executed from top down.
        //But both the this.setState are asynch calls which will be badged together and they can finish in different order 
            // this.setState(() => {
            //     return{
            //         count : 0
            //     }
            // })
            // this.setState((prevState) => {
            //     return{
            //         count : prevState.count + 1
            //     }
            // })
    }   
    render(){
        return (
        <div>
            <h1>Count : {this.state.count} </h1>
            <button onClick={this.handleIncrement}>+1</button>
            <button onClick={this.handleDecrement}>-1</button>
            <button onClick={this.handleReset}>reset</button>
        </div>
    )
    }
}
Counter.defaultProps = {
    count : 0,
    name : 'Shubham'
}

ReactDOM.render(<Counter count = {1}/>, document.getElementById('main-div'));
// let count = 0 ;
// const addone =  () => {
// count++;
// renderCounter();//This is how we can re render the entire page with changes
// };
// const reset = () => {
//     // console.log('Reset');
//     count = 0;
//     renderCounter();
// };

// //rerendering using function : BUT THIS IS highly inefficient
// //Virtual DOM algorithm helps us identify whose STATE is exactly changing in the page and helps us reload that element
// // GOTO Elements in Developers Tool on webpage and see the thing getting highlighted every time we click a button
// //Onle part of the H1 needs to be re rendered
// const renderCounter = () =>{

//     const templateThree = (
//         <div>
//         <h1>Count : {count}</h1>
//         <button id = "some-id" className = "some-class">+1</button>
        
//         {/* //Declaring onCLick handler inline  */}
//         <button onClick = {() => {
//         // console.log("Minus One");
//         count--;
//         renderCounter();
//         }
//         }>-1</button>
//         <button onClick = {addone}>+1</button>
//         <button onClick = {reset}>Reset</button>
//         {/* //Class is now a keyword in Javascript, so we use className */} 
//         </div>
        
//         );
//         // console.log(templateThree);
//         ReactDOM.render(templateThree, appRoot);
//         // takes 2 args : first is JSX that we want to render and id of the dom element where we want to render

// };

// //Will initialize all elemnts with a particular state nd show the webpage
// renderCounter();
