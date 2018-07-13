console.log('we are Inside utils.js');

const square = (x) => x*x;
const add = (a,b) => a+b;
const subtract = (a,b) => a-b;

//This is also valid : - (Inline method)
// export const square = (x) => x*x;
// export const add = (a,b) => a+b;

//Two tyoes of exports/imports

//Named export : -
export {add,square}

//default export 
export default subtract;