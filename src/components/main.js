var React = require('react');
var messages = require('../i18n/pt');
var addressList = [
  {
    "addressType": "residential",
    "receiverName": "Joakim",
    "addressId": "-1429301413320",
    "postalCode": "22260000",
    "city": "Rio de Janeiro",
    "state": "RJ",
    "country": "BRA",
    "street": "Rua São Clemente",
    "number": "100",
    "neighborhood": "Botafogo",
    "complement": "num 1000",
    "reference": null,
    "geoCoordinates": [],
    "selected": true
  },
  {
    "addressType": "residential",
    "receiverName": "Martin",
    "addressId": "-1429301413321",
    "postalCode": "22240000",
    "city": "Rio de Janeiro",
    "state": "RJ",
    "country": "BRA",
    "street": "Rua Voluntários da Pátria",
    "number": "411",
    "neighborhood": "Botafogo",
    "complement": "casa 2",
    "reference": null,
    "geoCoordinates": []
  }
];

var onSelect = function(address) {
  console.log('address selected!', address);
  // TODO simulate API latency
  // TODO check for errors and re-render with error message
};

var onValidSubmit = function(address) {
  console.log('address submit!', address);
  // TODO simulate API latency
  // TODO check for errors and re-render with error message
};

var options = {
  addressList: addressList,
  onSelect: onSelect,
  onValidSubmit: onValidSubmit,
  messages: messages,
  locales: 'pt'
};

var content = document.getElementById('content');

var AddressBook = React.createFactory(require('./AddressBook'));

React.render(AddressBook(options), content);
