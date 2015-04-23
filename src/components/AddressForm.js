var React = require('react');
var Formsy = require('formsy-react');
var _ = require('underscore');
require('../styles/address-form.less');

Formsy.addValidationRule('isAlphaNumericPunctuation', function (values, value) {
  return /^[A-Za-zÀ-ž0-9\/\\\-\.\,\s\(\)\'\#ªº]*$/.test(value);
});

var AddressForm = React.createClass({
  getInitialState: function () {
    return {
      canSubmit: true,
      address: this.props.initialAddress
    };
  },

  onValidSubmit: function (address) {
    address.addressId = this.state.address.addressId;
    this.props.onValidSubmit(address);
  },

  onChange: function (address) {
    this.setState({
      address: _.extend(this.state.address, address)
    });
  },

  enableButton: function () {
    this.setState({
      canSubmit: true
    });
  },

  disableButton: function () {
    this.setState({
      canSubmit: false
    });
  },

  render: function() {
    if (!this.state.address) {
      return;
    }
    var country = this.state.address.country;
    var countryInputGroup = require('./input-groups/InputGroup' + country);
    return (
      <Formsy.Form
        className='address-form'
        onValidSubmit={this.onValidSubmit}
        onChange={this.onChange}
        onValid={this.enableButton}
        onInvalid={this.disableButton}>
        {countryInputGroup(this.state.address)}
        <div className='row'>
          <div className='col-sm-3'>
            <button
              className='btn btn-primary'
              type='submit'
              disabled={!this.state.canSubmit}>
              Save
            </button>
          </div>
        </div>
      </Formsy.Form>
    );
  }
});

module.exports = AddressForm;
