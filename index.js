var customerName = 'bob';

function upperCaseCustomerName() {
  if (customerName) {
    customerName = customerName.toUpperCase();
  }
}
var setBestCustomer = () => {
    bestCustomer = 'not bob';
};

var overwriteBestCustomer = newFavorite => {
    bestCustomer = newFavorite;
};

const leastFavoriteCustomer = 'mike';

var changeLeastFavoriteCustomer = () => {
    leastFavoriteCustomer = 'someone else';
};