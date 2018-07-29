// import moment from "moment"; //We cannot use this as any use of moment() will now come to the mocked version of the library
//which will basically mean calling :
// export default (timestamp = 0)=> {
//     return moment(timestamp)
// }
// again and again as it has a moment() call

//So in order to use the original lib we use :
const moment = require.requireActual('moment');

//While mocking we have provided a default value for moment(), 
//now it will always start at 0, untill we pass in somevalue in moment(somevalue)
export default (timestamp = 0)=> {
    return moment(timestamp)
}