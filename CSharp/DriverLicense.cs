using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace CSharp
{
    public static class DriverLicense
    {
        public static Dictionary<string, Regex[]> StateDriversLicenseNumberRegex = new Dictionary<string, Regex[]>()
        {
            { "MS", new [] {new Regex("\\b\\d{9}\\b", RegexOptions.Compiled) } },
            { "NE", new [] {new Regex("\\b[A-Za-z]\\d{6,8}\\b", RegexOptions.Compiled) } }
        };

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
            Regex[] patterns;
            if (StateDriversLicenseNumberRegex.TryGetValue(stateCode?.Trim() ?? "", out patterns))
                return patterns.Any(p => p.IsMatch(licenseNumber));
            else
                return false; // invalid state code or state not yet supported
        }
    }
}
