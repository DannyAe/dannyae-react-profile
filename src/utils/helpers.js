// This helper file exports two functions: capitalizeFirstLetter and validateEmail.

// The first function, capitalizeFirstLetter, takes a string as an argument
// and returns the string with the first character converted to uppercase.
export function capitalizeFirstLetter(string) {
  // The charAt(0) function gets the first character of the string
  // toUpperCase() function converts this character to uppercase
  // slice(1) gets the rest of the string starting from the second character
  // Then, we concatenate the uppercase first character and the rest of the string
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// The second function, validateEmail, takes an email string as an argument
// and returns a boolean indicating whether the email is in a valid format.
export function validateEmail(email) {
  // This is a regular expression that matches the pattern of a typical email
  // The ^ character signifies the start of the line
  // The $ character signifies the end of the line
  // The rest of the expression includes various checks for typical elements of an email address
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  // The test function tests whether the string matches the pattern defined by the regular expression
  // The String(email).toLowerCase() part converts the email to a string (in case it's not already) 
  // and makes it lowercase (since email addresses are not case sensitive)
  return re.test(String(email).toLowerCase());
}
