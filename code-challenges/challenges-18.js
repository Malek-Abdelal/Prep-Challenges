'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    let array = [];
    let midLen = 0;
    let length = 0;
    array = str.split(" ");
    length = (array.length - 1) / 2;
    if (length % 2 != 0) {
        length = ((array.length) / 2)
    }
    midLen = array[length].length;
    return midLen;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    let obj1 = {};
    let obj2 = {};
    let arr1 = str1.split("");
    let arr2 = str2.split("");
    let check = true;
    for(let ele of arr1){
        obj1[ele] = (obj1[ele] + 1 || 1) ;
    }
    for(let ele of arr2){
        obj2[ele] = (obj2[ele] + 1 || 1) ;
    }
    for(let i in obj1){
        if (obj1[i] === obj2[i]) {
            check = true;
        }else {
            check = false;
            break;
        }
    }
    return(check);
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
        let index = 0;
        for (let i = 0; i < arr.length; i++) {
            if (int == arr[i]) {
                index = i
            } else if ((int != arr[i]) && (int == 2 || int == 4)) {
                index = (int - 1)
            } else if (int > 6) {
                index = (int - (3))
            }
        }
        return index;
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };