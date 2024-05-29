// Import the necessary function from the library.
import { isPasswordMatched } from 'js-validators-and-utils'

/**
 * @function isPasswordMatched
 * @param {string} password - The password to compare.
 * @param {string} confirmPassword - The confirmation of the password.
 * @param {number} minLength - The minimum length for the password.
 * @return {Error} - An object indicating the errors.
 */

// Example usage:
const password = 'mySecretPassword123'
const confirmPassword = 'mySecretPassword123'
const minLength = 8

// Call the function with the required arguments.
const error = isPasswordMatched(password, confirmPassword, minLength)

// Check the error object for validation results.
if (error.isTooShort) {
  console.error('Password is too short.') // Handle the error accordingly.
}

if (!error.isMatched) {
  // isMatched will be false if booth password are not equal.
  console.error('Passwords do not match.') // Handle the error accordingly.
}

// If there are no errors, the passwords are valid and matched.