'use strict';

var React = require('react');
var _ = require('underscore');
var ReactAddressSummary = require('./ReactAddressSummary');
var ReactAddressForm = require('./ReactAddressForm');

require('normalize.css');
require('../styles/address-book.less');

var ReactAddressBook = React.createClass({
  render: function() {
    var addressSummaryNodes = _.map(this.props.addressList, function(a) {
      return <ReactAddressSummary key={a.place_id} address={a} onSelect={this.props.onSelect}/>;
    }.bind(this));

    return (
      <div className='address-book'>
        {addressSummaryNodes}
        <ReactAddressForm />
      </div>
    );
  }
});

module.exports = ReactAddressBook;
