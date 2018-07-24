import { createStore } from "redux";

//createStore  function  : for creating redux store. This function takes in default state value as its argument
//Giving default value to the state:  state = {count : 0}
//Passing a function to the createStore function : 
// (state = {count : 0}) => {
//     return state;
// }

//reducers 
//This function is called a reducer : reducer decides the state based on the actions 
const countReducer = (state = {count : 0}, action) => {
    switch (action.type) {
        case 'INCREMENT' : 
        let incrementBy = 0;

        //All this can be removed as now all this is handled in the action generator call
        // if(action.incrementBy){
        //     incrementBy = action.incrementBy;
        // }else{
        //     incrementBy = 1;
        // }
        return {
            count : state.count + action.incrementBy
        }
        case 'DECREMENT' : 
        // let decrementBy = 0; 
        // if(action.decrementBy){
        //     decrementBy = action.decrementBy;
        // }else{
        //     decrementBy = 1;
        // }
        return {
            count : state.count - action.decrementBy
        }
        case 'SET' : return {
            count : action.count
        } 
        case 'RESET' : return {
            count : 0
        }
        default : 
        return state;
    }
}

const store = createStore(countReducer)


//getting the current state : store.getState()
//This will be called whenever there is a change in the state
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})


//ACTION GENERATOR
// const incrementCount = () => {
//     return {
//         type : 'INCREMENT'
//     }
// }
// or
//We need to give a default value here : increaseByObject = {}. B'cause of store.dispatch(incrementBy()) which has no argument passed
//In that case increaseByObject will be initialised to an empty object and the program will not crash
// const incrementCount = (increaseByObject = {}) => (
//     {type : 'INCREMENT',
//     incrementBy : typeof increaseByObject.incrementBy === 'number' ? increaseByObject.incrementBy : 1
//     }
// )

//Passing in default value for incrementBy here itself : {incrementBy = 1} now we dont require : 
// incrementBy : typeof incrementBy === 'number' ? incrementBy : 1
const incrementCount = ({incrementBy = 1} = {}) => ({
    type : 'INCREMENT',
    incrementBy : incrementBy
})

const decrementCount = ({decrementBy = 2} = {} ) => ({
    type: 'DECREMENT',
    decrementBy : decrementBy
})

const setCount = ({count}) => ({
    type : "SET",
    count : count
})
const resetCount = () => ({
    type : "RESET"
})



//Actions are objects with a particular type, they can be passed to the createStore function to update the state
//createstore function will be called with every dispatch call
// store.dispatch({
//     type : "INCREMENT",
//     incrementBy : 5
// })
// OR
//Passing an object as an argument 
store.dispatch(incrementCount({incrementBy : 5}));



// store.dispatch({
//     type : "INCREMENT"
// })
// OR
//Calling Action generator for INCREMENT 
store.dispatch(incrementCount());

// store.dispatch({
//     type : "DECREMENT",
//     decrementBy : 10
// })
store.dispatch(decrementCount({decrementBy : 10}));
store.dispatch(decrementCount());

store.dispatch({
    type : "SET",
    count :101
})
store.dispatch(setCount({count : -120}));

// we can use unsubscribe to stop looking for changes in the state from HEREON : 
unsubscribe();
store.dispatch({
    type : "DECREMENT",
    decrementBy : 10
})

store.dispatch({
    type : "RESET"
})
store.dispatch(resetCount());
// {
//     type : "INCREMENT"
//     //Action's type naming convention
// }
// {
//     type : "DECREMENT"
// }
// {
//     type : "RESET"
// }


//Example of destrcturing of the argument while passing to function
const add = ( { a,b }, c  ) => {
    return a+b+c;
}
console.log(add({a:11,b:23}, 100));