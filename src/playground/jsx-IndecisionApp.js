console.log("This is coming from app.js");

//This is JSX : Javascript XML
//We inserted div beacuse the adjacent JSX cannot occur, it needs to be placed under one root element
const app = {
    title : 'Indecision',
    subtitle : 'Some Subtitle',
    options : [] 
};

const onAddClick = (e) => {
    e.preventDefault(); //avoid reloading of entire page
    const val = e.target.elements.option.value; //where e.target refers to the the form as form is the target of the clicking event
    if(val){
        app.options.push(val);
        e.target.elements.option.value = '';
        renderapp();
    }
}
const onRemoveAllClick = () => {
    app.options = [];
    renderapp();
}
const decisionMaker = () => {
    const randomOption = Math.floor(Math.random() * app.options.length);
    //Math.random will give number between 0 and 1
    console.log(randomOption);
    const option = app.options[randomOption];
    alert(option);
}

const renderapp = () => {

    const temp = (
        <div>
            <h1>{app.title}</h1>
           {(app.subtitle) && <p>Put your life in the hands of the computer</p>}
           <p>{(app.options.length > 0 ) ? 'Here are you options' : 'No options to display'}</p>
           {/* disabled  = {app.options.length === 0} will either return true or false which will allow for conditional rendering of button */}
           <button disabled  = {app.options.length === 0} onClick = {decisionMaker}>What should I do?</button>
           <button onClick = {onRemoveAllClick}>Remove All</button>
            {/* {
                //    Rendering non-jsx inside JSX will be like : 
                [33,44,55, 'shubham', null, undefined, true]   
                // This array will be treated as {33}{44}{55}, react can keep track of these as it associates react-text-someNumber with each of them
                // null, undefined, true : are always ignored nd not displayed
            } */}
            {/* {
                //Jsx in array inside JSX, key needs to be given
                [<p key = '1'>a</p>, <p key = '2'>b</p>, <p key = '3'>c</p>]
            } */}
            <ol>
                {//Rendering JSX inside JSX , It is necessary to give the key for React to keep track of the elements 
                //By using mao function we have mapped the string to the JSX inside the options array
                    app.options.map((item) => {
                     return <li key = {item}>{item}</li>
                    })
                }
        
            </ol>
            <form onSubmit = {onAddClick}>
                <input type = 'text' name = 'option'/>
                <button>Add item</button>
            </form>
        </div>
    );
    ReactDOM.render(temp,appRoot);
    
};
const appRoot = document.getElementById("main-div");
renderapp();

// var username = 'Shubham';
// var userlocation = 'Gurgaon';
// var age = 26;

//Making an object instead of individual variables 
// const tempTwo = {
//     //try commenting the code
//     username : 'Shubham',
//     userlocation  : 'Gurgaon',
//     age : 20
// };

// function getLocation(location){
// if(location){
//     return <p>Location : {location}</p>
// }else{
//     return 'Location is Unknown'
// }

// }
// const templateTwo = (
//     <div>
//         {/* Using conditional rendering */}
//         {/* //Ternary operator used when we have to do choose b/w 2 things */}
//         <h1>{(tempTwo.username) ? tempTwo.username : 'Anonymous'} </h1>
//         {(tempTwo.age && tempTwo.age>=18) && <p> Age : {tempTwo.age}</p>}
//         {getLocation(tempTwo.userlocation)}
//     </div>

// );

