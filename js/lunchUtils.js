'use strict';

let lunchUtils = (function () {

    // return the correct day of the week for the int that is passed in
    function getDow(intDow) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', "Saturday"];

		if (intDow > days.length || intDow < 0)
			return 'Unknown';
		else 
			return days[intDow];
    }

    // return the correct lunch for the day of the week that is passed in
    function getLunch(dow) {
        const lunchMenus = ['pizza', 'burrito', 'taco', 'fish', 'haggis', 'burgers', 'tofurkey'];

		return lunchMenus[getDow(dow)];
    }

    return {
        getDow: getDow,
        getLunch: getLunch

    }
})();
