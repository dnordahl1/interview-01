using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CSharp
{
    public static class Strings
    {
        /// <summary>
        /// Implement a string reversal method
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public static string Reverse1(string input)
        {
            if (input == null)
                return null;
            else 
                return new string(input.Reverse().ToArray());
        }

        /// <summary>
        /// Implement a different string reversal method
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public static string Reverse2(string input)
        {
            if (input == null)
                return null;

            var sb = new StringBuilder(input.Length);

            for (var i = input.Length - 1; i >= 0; i--)
            {
                sb.Append(input[i]);
            }

            return sb.ToString();
        }


        /// <summary>
        /// Implement a string truncation function that safely truncates the input without throwning an exception. Return null if input is null.
        /// </summary>
        /// <param name="input"></param>
        /// <param name="length"></param>
        /// <returns></returns>
        public static string SafeTruncate(string input, int length)
        {
            if (input == null)
                return null;
            else
                return (input.Length > length) ? input.Substring(0, length) : input;
        }

        /// <summary>
        /// return a list of even numbers from the input.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public static List<int> EvenNumerics(List<string> input)
        {
            return input.Select(s => int.TryParse(s, out int i) ? i : 1 )  // return odd number for strings that are not integers
                        .Where(i => i % 2 == 0)
                        .ToList();
        }
    }
}
