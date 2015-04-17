'use strict';

var ReactAddressBook = require('./ReactAddressBook');
var React = require('react');
var _ = require('underscore');
var content = document.getElementById('content');

var onSelect = function(address) {
  console.log('address!', address);
  _.each(addressList, function(a) {
    if (a===address) {
      a.selected = true;
    }
    else {
      a.selected = false;
    }
  });
  render();
};

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
    "number": "114",
    "neighborhood": "Botafogo",
    "complement": "num 1102",
    "reference": null,
    "geoCoordinates": []
  }
];

var render = function() {
  React.render((
    <div className='container'>
      <ReactAddressBook addressList={addressList} onSelect={onSelect}/>
    </div>
  ), content);
};

render();
