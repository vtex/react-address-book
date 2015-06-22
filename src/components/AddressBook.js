import React from "react";
import _ from "underscore";
import AddressSummary from "./AddressSummary";
import AddressForm from "./AddressForm";
if (!window.Intl) {
  window.Intl = require('intl');
}
import ReactIntl, {IntlMixin, FormattedMessage} from "react-intl";
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

  onCancel() {
    let notEditing = (a) => a.editing = false;
    let noId = (a) => !a.addressId;

    this.setState({
      addressList: _.chain(this.state.addressList)
        .each(notEditing)
        .reject(noId)
        .value()
    });
  },

  onEdit(address) {
    this.setState({
      addressList: _.map(this.state.addressList, function(a) {
        a.editing = (a === address);
        return a;
      })
    });
  },

  onNewAddress() {
    this.state.addressList.push({
      editing: true,
      country: this.props.country
    });
    this.setState({
      addressList: this.state.addressList
    });
  },

  onValidSubmit(address) {
    this.setState({
      addressList: _.map(this.state.addressList, function(a) {
        a.editing = false;
        // new address or edit address
        if (!a.addressId || (a.addressId === address.addressId)) {
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
    var addressSummary;
    var addressSummaryNodes;
    var editAddress = _.find(this.state.addressList, function(a) {
      return a.editing;
    });

    if (editAddress) {
      addressForm = <AddressForm
        initialAddress={editAddress}
        onCancel={this.onCancel}
        onValidSubmit={this.onValidSubmit}/>;
    } else {
      addressSummaryNodes = _.map(this.state.addressList, (a) =>
        <AddressSummary
          key={a.addressId}
          address={a}
          onSelect={this.onSelect}
          onEdit={this.onEdit}/>
      );
      addressSummary = <div className='address-summary-list'>
        {addressSummaryNodes}
        <button onClick={this.onNewAddress} className='btn btn-primary new-address'>
          <FormattedMessage message={this.getIntlMessage('newAddress')} />
        </button>
      </div>;
    }

    return (
      <div className='address-book'>
        {addressSummary}
        {addressForm}
      </div>
    );
  }
});

export default AddressBook;
