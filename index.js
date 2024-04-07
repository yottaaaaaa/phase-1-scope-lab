// Write your solution in this file!
var customerName = 'bob';

function returnCustomerName() {
    return customerName;
}
function upperCaseCustomerName() {
    customerName = customerName.toLowerCase(); 
    customerName = customerName.charAt(0).toUpperCase() + customerName.slice(1);
}
var bestCustomer;

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

let leastFavoriteCustomer = 'initial least favorite customer';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new least favorite customer';
}



