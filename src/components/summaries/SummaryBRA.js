var React = require('react');

module.exports = function (address) {
  return (
    <div className='address-lines'>
      <div className='address-line-1'>
        <p>{address.street}, {address.number}, {address.complement} - {address.neighborhood}</p>
      </div>
      <div className='address-line-2'>
        <p>{address.city} - {address.state} - {address.country}</p>
      </div>
      <div className='address-line-3'>
        <p>{address.postalCode}</p>
      </div>
    </div>
  );
};
