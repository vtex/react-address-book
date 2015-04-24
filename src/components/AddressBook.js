import React from "react";
import _ from "underscore";
import AddressSummary from "./AddressSummary";
import AddressForm from "./AddressForm";
if (!window.Intl) {
  window.Intl = require('intl');
}
import ReactIntl, {IntlMixin} from "react-intl";
import "normalize.css";
import "../styles/address-book.less";

var AddressBook = React.createClass({
  mixins: [ReactIntl.IntlMixin],

  getInitialState() {
    return {
      addressList: this.props.addressList
    };
  },

  onSelect(address) {
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

  onEdit(address) {
    this.setState({
      addressList: _.map(this.state.addressList, function(a) {
        a.editing = (a === address);
        return a;
      })
    });
  },

  onValidSubmit(address) {
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

  render() {
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

export default AddressBook;
