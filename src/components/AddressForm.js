var React = require('react');
var Formsy = require('formsy-react');
require('../styles/address-form.less');

Formsy.addValidationRule('isAlphaNumericPunctuation', function (values, value) {
  return /^[A-Za-zÀ-ž0-9\/\\\-\.\,\s\(\)\'\#ªº]*$/.test(value);
});

var AddressForm = React.createClass({
  getInitialState: function () {
    return {
      canSubmit: true
    };
  },

  onValidSubmit: function (address) {
    address.addressId = this.props.address.addressId;
    this.props.onValidSubmit(address);
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
    if (!this.props.address) {
      return;
    }
    var country = this.props.address.country;
    var countryInputGroup = require('./input-groups/InputGroup' + country);
    return (
      <Formsy.Form
        className='address-form'
        onValidSubmit={this.onValidSubmit}
        onValid={this.enableButton}
        onInvalid={this.disableButton}>
        {countryInputGroup(this.props.address)}
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
