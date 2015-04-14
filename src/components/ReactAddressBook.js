'use strict';

var React = require('react');
var _ = require('underscore');
var ReactAddressSummary = require('react-address-summary');

require('normalize.css');
require('../styles/address-book.less');

var ReactAddressBook = React.createClass({
  render: function() {
    var addressSummaryNodes = _.map(this.props.addressList, function(a) {
      return <ReactAddressSummary address={a}/>;
    });

    return (
      <div className='address-book'>
        {addressSummaryNodes}
      </div>
    );
  }
});

module.exports = ReactAddressBook;
