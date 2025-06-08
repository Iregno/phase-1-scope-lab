// Write your solution in this file!

// 1. Declare customerName in global scope
var customerName = 'bob';

// 2. Function to uppercase the customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function to set best customer
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// 4. Function to overwrite best customer
function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

// 5. Function that tries to change a constant (should throw error)
const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else';
}
