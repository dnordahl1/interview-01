using System.Linq;

namespace CSharp
{
    public static class DriverLicense
    {
        /// <summary>
        /// Consider this list of formats: https://ntsi.com/drivers-license-format/
        /// Validate Driver's license number, implement Nebraska and Mississippi in an expandable way to eventually handle all US states.
        /// Fail validation if unexpected data is passed in.
        /// Nebraska: 1Alpha+6-8Numeric
        /// Mississippi: 9Numeric
        /// </summary>
        /// <param name="licenseNumber"></param>
        /// <param name="stateCode"></param>
        /// <returns></returns>
        public static bool Validate(string licenseNumber, string stateCode)
        {
            var lookup = StateDriversLicenseRegexPatterns.GetInstance();

            var patternsForState = lookup.GetRegexPatternsForState(stateCode);

            return patternsForState.Any(p => p.IsMatch(licenseNumber));

        }
    }
}
