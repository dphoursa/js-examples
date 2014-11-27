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

module.exports.is_pandigital = is_pandigital;