'use strict';

var ReactAddressBook = require('./ReactAddressBook');
var React = require('react');
var _ = require('underscore');
var content = document.getElementById('content');

var onSelect = function(address) {
  console.log('address selected!', address);
  _.each(addressList, function(a) {
    a.selected = (a === address);
  });
  render();
};

var onEdit = function(address) {
  console.log('address edit!', address);
  _.each(addressList, function(a) {
    a.editing = (a === address);
  });
  render();
};

// Todo change address state
var onSubmit = function(address) {
  console.log('address submit!', address);
  _.each(addressList, function(a) {
    a.editing = false;
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
    "addressId": "-1429301413320",
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

var render = function() {
  var editAddress = _.find(addressList, function(a) {return a.editing;});

  React.render((
    <div className='container'>
      <ReactAddressBook addressList={addressList}
                        editAddress={editAddress}
                        onSelect={onSelect}
                        onEdit={onEdit}
                        onSubmit={onSubmit}/>
    </div>
  ), content);
};

render();
