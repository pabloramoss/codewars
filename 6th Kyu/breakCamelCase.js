/*
Complete the solution so that the function will break up camel casing, using a space between words.

breakCamelCase("camelCasing") // "camel Casing"
breakCamelCase("camelCasingTest") // "camel Casing Test"
*/

//Answer//
function breakCamelCase(string) {
	return string.replace( /([A-Z])/g, " $1" ).slice(0);
}