/*
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
Examples of valid inputs:
1.2.3.4
123.45.67.89

Examples of invalid inputs:
1.2.3
1.2.3.4.5
123.456.78.90
01.02.03.04
*/

function isValidIP(str) {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}