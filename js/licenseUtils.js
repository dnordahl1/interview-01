'use strict';



let licenseUtils = (function () {

    // Consider this list of formats: https://ntsi.com/drivers-license-format/
    // Validate Driver's license number, implement Nebraska and Mississippi in an expandable way to eventually handle all US states.
    // Fail validation if unexpected data is passed in.
    // Nebraska: 1Alpha+6-8Numeric
    // Mississippi: 9Numeric

    function validate(license, state) {

        return null;

    }
    return {

        validate: validate

    }
})();
