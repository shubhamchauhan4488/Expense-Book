console.log('inside person.js');

const isAdult = (x) => {  
    return x>=18
}

const canDrink = (y) => {
    return y>=21
    // if (y>21){
    //     // console.log('Person is allowed to drink');
    //     return true;
    // }else{
    //     // console.log('Person is not allowed to drink');
    //     return false;
    // }
}


//Default Export
const isSenior = (age) =>{ return age>=60}
// export default isSenior;
// or
// export default (age) =>{ return age>60
// }


export {isAdult, canDrink, isSenior as default}