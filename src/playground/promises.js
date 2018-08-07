import { setTimeout } from "timers";

// const promise = new Promise((resolve,reject) => {
// //setTimeout: 1st arg: function to call, 2nd arg : delay needed before the function call
//     setTimeout(() => {


//     //  resolve({
//     //      name : 'Shubham',
//     //      age : 25
//     //  })   
//     reject('something went wrong!')
//     }, 5000);
// });

// console.log('before');

// promise.then((data) => {
//     console.log('1',data)
// }).catch((error) => {
//     console.log('Here is your error : ',error)
// })
// console.log('after');

const promise = new Promise((resolve,reject) => {
       setTimeout(() => {
         
            resolve({
                name : 'Shubham',
                age : 25
            })   
        }, 5000);
    });
    
    console.log('before');
    
    promise.then((data) => {
        console.log(data)

        //This is returning a promise from one promise i.e promise chaining
       return new Promise((resolve,reject) => {
        setTimeout(() => {
           resolve('This is from second promise!')
         }, 5000);
     });

    }).then((str) => {
        console.log(str)
    })
    .catch((error) => {
        console.log('Here is your error : ',error)
    })
    console.log('after');

