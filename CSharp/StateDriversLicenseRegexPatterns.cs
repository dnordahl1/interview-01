using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;

namespace CSharp
{
    public class StateDriversLicenseRegexPatterns : Dictionary<string, string[]> 
    {
        protected Dictionary<string, List<Regex>> _regexLookup;
        protected static StateDriversLicenseRegexPatterns _instance = null;

        [JsonConstructor]
        private StateDriversLicenseRegexPatterns() { }

        public static StateDriversLicenseRegexPatterns GetInstance()
        {
            if (_instance == null)
            {
                var currentDirectory = Path.GetDirectoryName(Assembly.GetAssembly(typeof(StateDriversLicenseRegexPatterns)).CodeBase);
                var fileContents = File.ReadAllText(new Uri(currentDirectory).LocalPath + "\\StateDriversLicensePatterns.json");
                _instance = JsonConvert.DeserializeObject<StateDriversLicenseRegexPatterns>(fileContents);
            }
            return _instance;
        }

        public List<Regex> GetRegexPatternsForState(string stateCode)
        {
            List<Regex> patterns;
            if (_regexLookup.TryGetValue(stateCode?.Trim() ?? "", out patterns))
                return patterns;
            else
                return new List<Regex>();
        }

        [OnDeserialized]
        internal protected void CompileRegexOnDeserialization(StreamingContext context)
        {
            try
            {
                _regexLookup = new Dictionary<string, List<Regex>>();

                foreach (KeyValuePair<string, string[]> statePatternSet in this)
                {
                    _regexLookup.Add(statePatternSet.Key, statePatternSet.Value.Select(r => new Regex(r, RegexOptions.Compiled)).ToList());
                }
            }
            catch (ArgumentException ex) // TODO: would be good to return which regex pattern caused the problem
            {
                ex.Data.Add("ExtraInfo", "Invalid regex found when loading StateDriversLicenseRegexPattern configuration file.");
                throw;
            }
        }
    }
}
