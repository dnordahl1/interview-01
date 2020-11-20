'use strict';

let licenseUtils = (function () {

    // Consider this list of formats: https://ntsi.com/drivers-license-format/
    // Validate Driver's license number, implement Nebraska and Mississippi in an expandable way to eventually handle all US states.
    // Fail validation if unexpected data is passed in.
    // Nebraska: 1Alpha+6-8Numeric
    // Mississippi: 9Numeric
	
    function validate(license, state) {
		
		if (!isString(license))
			return false;
	
		if (state == "MS") 
			return /\d{9}/.test(license);
		if (state == "NE")
			return /[A-Za-z]{1}\d{6,8}/.test(license);
		else 
			return false;
    }
	
	function isString(str) {
		return (!(str == null && str == undefined) && typeof str == 'string' || str instanceof String)
	}
	
    return {

        validate: validate

    }
})();
