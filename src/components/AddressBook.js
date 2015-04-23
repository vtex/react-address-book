var React = require('react');
var _ = require('underscore');
var AddressSummary = require('./AddressSummary');
var AddressForm = require('./AddressForm');

require('normalize.css');
require('../styles/address-book.less');

var AddressBook = React.createClass({
  getInitialState: function() {
    return {
      addressList: this.props.addressList
    };
  },

  onSelect: function(address) {
    this.setState({
      addressList: _.map(this.state.addressList, function(a) {
        a.selected = (a === address);
        return a;
      })
    });
    if (this.props.onSelect) {
      this.props.onSelect(address);
    }
  },

  onEdit: function(address) {
    this.setState({
      addressList: _.map(this.state.addressList, function(a) {
        a.editing = (a === address);
        return a;
      })
    });
  },

  onValidSubmit: function(address) {
    this.setState({
      addressList: _.map(this.state.addressList, function(a) {
        a.editing = false;
        if (a.addressId === address.addressId) {
          _.extend(a, address);
        }
        return a;
      })
    });
    if (this.props.onValidSubmit) {
      this.props.onValidSubmit(address);
    }
  },

  render: function() {
    var addressForm;
    var addressSummaryNodes;
    var editAddress = _.find(this.state.addressList, function(a) {
      return a.editing;
    });

    if (editAddress) {
      addressForm = <AddressForm
        initialAddress={editAddress}
        onValidSubmit={this.onValidSubmit}/>;
    } else {
      addressSummaryNodes = _.map(this.state.addressList, function(a) {
        return <AddressSummary
          key={a.addressId}
          address={a}
          onSelect={this.onSelect}
          onEdit={this.onEdit}/>;
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

module.exports = AddressBook;
