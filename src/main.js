import React from "react";
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

// git clone git@github.com:vtex/i18n; npm i; grunt
// in production, localhost -> io.vtex.com.br and add version after i18n
$.get(`http://localhost:8081/i18n/address/${locales}.json`).done(function(messages) {
  var options = {
    addressList,
    messages,
    locales,
    country
  };

  var content = document.getElementById('content');

  React.render(<AddressBook {...options}/>, content);
});
