/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
Examples
toCamelCase("the stealth warrior") // returns "theStealthWarrior"
toCamelCase("THE STEALTH WARRIOR") // returns "theStealthWarrior"
*/

//Answer//
function toCamelCase(string) {
  const camelCaseString = string.split(" ").map(function( word, index) {
    if(index === 0) {
      return word.toLowerCase()
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  }).join("")
  
  return camelCaseString
}