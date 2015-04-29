import React from "react";
import $ from "jquery-browserify";
import AddressBook from "./components/AddressBook";

var country = $("meta[name='country']").attr("content"); // BRA
var language = $("meta[name='language']").attr("content"); // pt-BR
var locales = language.split('-')[0]; // pt-BR -> pt

// Mock address list
var addressListCountries = {
  BRA: require('./mock/address-list-BRA.js'),
  ARG: require('./mock/address-list-ARG.js')
};

var addressList = addressListCountries[country];

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

// git clone git@github.com:vtex/i18n; npm i; grunt
// in production, localhost -> io.vtex.com.br and add version after i18n
$.get(`http://localhost/i18n/address/${locales}.json`).done(function(messages) {
  var options = {
    addressList,
    onSelect,
    onValidSubmit,
    messages,
    locales,
    country
  };

  console.log(options);

  var content = document.getElementById('content');

  var AddressBookFactory = React.createFactory(AddressBook);

  React.render(AddressBookFactory(options), content);
});
