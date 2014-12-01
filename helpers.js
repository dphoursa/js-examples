/**
 * Check if a number is pandigital, i.e contains only 1 to 9 digits 
 * 
 * @param int n Number to check
 * @return boolean true if is pandigital and false if not
 */
var is_pandigital = function(n) {
    var digits = (n).split("");
    digits.sort();
    for (var c = 0; c < digits.length; c++ ) {
        if (digits[c] != c + 1) {
            return false;
        }
    }
    
    return true;
}

//make is_pandigital function exportable
module.exports.is_pandigital = is_pandigital;
