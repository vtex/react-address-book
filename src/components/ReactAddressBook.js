'use strict';

var React = require('react');
var _ = require('underscore');
var ReactAddressSummary = require('./ReactAddressSummary');
var ReactAddressForm = require('./ReactAddressForm');

require('normalize.css');
require('../styles/address-book.less');

var ReactAddressBook = React.createClass({
  render: function() {
    var addressForm;
    var addressSummaryNodes;

    if (this.props.editAddress) {
      addressForm = <ReactAddressForm
        address={this.props.editAddress}
        onSubmit={this.props.onSubmit}/>;
    } else {
      addressSummaryNodes = _.map(this.props.addressList, function(a) {
        return <ReactAddressSummary
          key={a.place_id}
          address={a}
          onSelect={this.props.onSelect}
          onEdit={this.props.onEdit}/>;
      }.bind(this));
    }

    return (
      <div className='address-book'>
        {addressSummaryNodes}
        {addressForm}
      </div>
    );
  }
});

module.exports = ReactAddressBook;
