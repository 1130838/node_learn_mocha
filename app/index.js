var utils = require('./utils.js'); // do this to call functions in other file


// the thing about callbacks is think about 1 function that is composed by other functions ( which are passes through parameter)
// read this :
// http://eloquentjavascript.net/05_higher_order.html


// im passing through parameter an array and 'something' i want to do with it ( a function to print in the screen )
var my_array = [1,2,3,4,5];
utils.sumAndDoSomethingElse(my_array, print, presentFinalResult);

function print(data) {
    console.log(data);
};

function presentFinalResult (data) {
    console.log('And the final result is ' + data);
}

