'use strict';

let numericUtils = (function () {
    // return a list of even numbers from an array of number
    function evenNumerics(numbers) {
		if (isNotValidArray(numbers))
			return null;
		
		return numbers.filter(item => isInteger(item) && item % 2 === 0);
    }
    // return the largest number in an array
    function largestNumber(numbers) {
		if (isNotValidArray(numbers))
			return null;
		
		return Math.max.apply(Math, numbers.filter(item => isInteger(item)));
    }

	function isNotValidArray(arr) {
		return (arr == null || arr == undefined || !Array.isArray(arr) || arr.length == 0);
	}

	function isInteger(i) {
		return (!(i == null && i == undefined) && Number.isInteger(i))
	}

    return {

        evenNumerics: evenNumerics,
        largestNumber: largestNumber,

    }
})();
