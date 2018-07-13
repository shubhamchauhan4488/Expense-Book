class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.onToggleClick = this.onToggleClick.bind(this);
        this.state= {
            visibilityBool : false
        }
    }
    onToggleClick(){
        this.setState((prevState) => {
            console.log(prevState);
            return{
                visibilityBool : !prevState.visibilityBool
            }
            // this.state.visibilityBool = !prevState.visibilityBool
        });
    };
    render(){
        return(
            <div>
            <p>Visibility Toggle Exmaple</p>
                <button onClick = {this.onToggleClick}>{(this.state.visibilityBool)?'Hide Details':'Show Details'}</button>
                {(this.state.visibilityBool) && (
                    <div>
                        <p>You can see me!!</p>
                    </div>
                )}
            </div>
         )
    }
}
ReactDOM.render(<Visibility />, document.getElementById('main-div'));