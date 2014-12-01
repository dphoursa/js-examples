/**
 *
 * Pandigital products
 *
 * Problem 32
 *
 * We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.
 *
 * The product 7254 is unusual, as the identity, 39 x 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.
 *
 * Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.
 * HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
 *
 */

// import helper functions that are common between different problems 
var helper = require("./helpers.js");

/** @type Array holds all unique products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital */
var unique = [];

/** @type int */
var answer = 0;

for (var a = 1; a < 2000; a++) {
    for (var b = 1; b < 50; b++) {
        var i = a * b;
        
        if (("" + i + a + b).length == 9 && helper.is_pandigital("" + i + a + b) && unique.indexOf(i) == -1) {
            unique.push(i);
            answer += i;
        }
    }
}

console.log("Total: " + answer);
