'use strict';


// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {
    let reversed = "";
    for (let i = string.length - 1 ; i >= 0 ; i--) {
        reversed += string[i];
    }
    return reversed;
    //write your code here ...
}
// -------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

const detectFace = (arr) => {
    let result = [];
    for (let ele of arr) {
        let check = false;
        for (let i = 0; i < ele.length; i++) {
            (ele[i] === "^" && ele[i + 1] === "_" && ele[i + 2] === "^" ) ? check = true : null;
        } // Can use .includes method also.
        (check === true) ? result.push(ele) : null;
    }
    return result;
    //write your code here ...
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes in a string and returns a string contains only characters in even positions.
//
// Ex :-
// Input <= "coding" output =>"cdn"

const eveCharacter = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        (i % 2 === 0) ? result += str[i] : null;
    }
    return result;
    //write your code here ...
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:

// Let us consider you are hired as a software developer in a tech company and you are assigned to work on a restaurant web application project .

// And you are assigned to write function to return only ingredients that contains chicken.
//
// Input:
// [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
//
// Output:
// [["grilled chicken"], ["baked chicken"], ["fried chicken"]];


const chickenGradients = (arr) => {
    let chickener =[];
    for (let element of arr) {
        for (let ele in element) {
            (element[ele].includes("chicken")) ? chickener.push(element.splice(ele, 1)) : null;
        }
    }
    return chickener;
    //write your code here ...
}
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };
