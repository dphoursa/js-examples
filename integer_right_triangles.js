/**
 *
 * Integer right triangles
 *
 * Problem 39
 *
 * If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.
 *
 * {20,48,52}, {24,45,51}, {30,40,50}
 *
 * For which value of p ² 1000, is the number of solutions maximised?
 *
 */

// c = sqrt(a^2 + b^2)
// P = a + b + c
// P = a + b + sqrt(a^2 + b^2)

/** @type array storage for seen perimeters */ 
var answers = [];

/** @type int most number of ways to make a perimeter that is <= 1000 */
var answer = 0;

/** @type int perimeter that can be name in most number of ways */
var answer_p = 0;

for (var a = 1; a < 500; a++) {
    for (var b = 1; b < 500; b++) {
        var p = a + b + Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        if (p <= 1000) {
            if (typeof(answers[p]) == undefined) {
                answers[p] = 0;
            }
            
            answers[p]++;
            
            if (answer < answers[p]) {
                answer_p = p;
                answer = answers[p];
            }
        }
    }
}

console.log("Answer " + answer_p);
