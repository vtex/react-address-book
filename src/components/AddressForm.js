import React from "react";
import Formsy from "formsy-react";
import _ from "underscore";
import ReactIntl, {IntlMixin, FormattedMessage} from "react-intl";
import "../styles/address-form.less";

Formsy.addValidationRule('isAlphaNumericPunctuation', function (values, value) {
  return /^[A-Za-zÀ-ž0-9\/\\\-\.\,\s\(\)\'\#ªº]*$/.test(value);
});

var AddressForm = React.createClass({
  mixins: [ReactIntl.IntlMixin],

  getInitialState() {
    return {
      canSubmit: true,
      address: _.clone(this.props.initialAddress)
    };
  },

  onValidSubmit(address) {
    address.addressId = this.state.address.addressId;
    this.props.onValidSubmit(address);
  },

  onChange(address) {
    this.setState({
      address: _.extend(this.state.address, address)
    });
  },

  enableButton() {
    this.setState({
      canSubmit: true
    });
  },

  disableButton() {
    this.setState({
      canSubmit: false
    });
  },

  render() {
    if (!this.state.address) {
      return;
    }
    var country = this.state.address.country;
    var countryInputGroup;
    try {
      countryInputGroup = require('./input-groups/InputGroup' + country);
    }
    catch (e) {
      // Default input group
      countryInputGroup = require('./input-groups/InputGroup');
    }

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
              className='btn btn-default'
              onClick={this.props.onCancel}
              type='button'>
              <FormattedMessage message={this.getIntlMessage('cancel')} />
            </button>
            <button
              className='btn btn-primary'
              type='submit'
              disabled={!this.state.canSubmit}>
              <FormattedMessage message={this.getIntlMessage('save')} />
            </button>
          </div>
        </div>
      </Formsy.Form>
    );
  }
});

export default AddressForm;
