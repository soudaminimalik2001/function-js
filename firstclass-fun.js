//1. var b=function(parameter){
//     console.log(parameter)
// }
// b(function(){

// })
// o/p:-[function]
// notes:-here we are use anonynomous function as a value in this function.

//2. var b=function(parameter){
//     console.log(parameter);
// }
// function xyz(){
// }
// b(xyz);
// o/p:-[function:xyz]
// notes:-here we are use name function inside the function and call inside the b function.

//3. var b=function(parameter){
//     return function(){

//     }
// }
// console.log(b())
// o/p:-[function]
// notes:-here we are return a anonymous function in a function.

// all above ability to be used like value this is called first class function

