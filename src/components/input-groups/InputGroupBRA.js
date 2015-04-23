var React = require('react');
var CEP = require('../inputs/CEP');
var Text = require('../inputs/Text');

module.exports = function (address) {
  var className = 'input-group-' + address.country;
  return (
    <div className={className}>
      <div className='row'>
        <CEP className='col-sm-6' value={address.postalCode}/>
      </div>
      <div className='row'>
        <Text className='col-sm-6'
          name='street'
          required
          value={address.street}/>
      </div>
    </div>
  );
};
