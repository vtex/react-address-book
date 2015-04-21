var React = require('react');
var CEP = require('../inputs/CEP');
var Street = require('../inputs/Street');

module.exports = function (address) {
  var className = 'input-group-' + address.country;
  return (
    <div className={className}>
      <div className='row'>
        <CEP className='col-sm-6' value={address.postalCode}/>
      </div>
      <div className='row'>
        <Street className='col-sm-6'
          value={address.street}/>
      </div>
    </div>
  );
};
