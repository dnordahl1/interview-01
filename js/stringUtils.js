'use strict';

let stringUtils = (function () {
    // implement function that will reverse a string
    function reverse1(str) {

		if (!isString(str))
			return null;
		
		var reversedString = "";
		
		for (var i = str.length - 1; i >= 0; i--) {
			reversedString += str[i];
		}
		
        return reversedString;
    }
    //implement another function to reverse a string
    function reverse2(str) {
		
        if (!isString(str))
			return null;
		
		return str.split("").reverse().join("");
    }
    // implement a function to truncate a string
    function safeTruncate(str, length) {
		
        if (!isString(str) || !isInteger(length))
			return null;
		
		if (length < 0) 
			return "";
		
		if (str.length > length) 
			return str.substring(0, length);
		else
			return str;
    }

	// return if parameter passed is a string or return false if it is null, undefined, or a different type
	function isString(str) {
		return (!(str == null && str == undefined) && typeof str == 'string' || str instanceof String)
	}
	
	function isInteger(i) {
		return (!(i == null && i == undefined) && Number.isInteger(i))
	}

    return {

        reverse1: reverse1,
        reverse2: reverse2,
        safeTruncate: safeTruncate,

    }
})();
