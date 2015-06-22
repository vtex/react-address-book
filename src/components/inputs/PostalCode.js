import React from "react";
import Formsy from "formsy-react";
import ReactIntl, { IntlMixin, FormattedMessage } from "react-intl";

// TODO it would be nice to use address.country automatically
// instead of receiving it via validations="isPostalCode:ARG"
Formsy.addValidationRule('isPostalCode', function (values, value, country) {
  let regex;
  switch (country){
    case 'ARG':
      regex = /^([\d]{4})$/;
      break;
  }
  return regex.test(value);
});

var PostalCode = React.createClass({
  mixins: [Formsy.Mixin, IntlMixin],

  getDefaultProps() {
    return {
      name: 'postalCode',
      required: true
    };
  },

  changeValue(event) {
    this.setValue(event.currentTarget.value);
  },

  render() {
    var labelMessageKey = 'form.' + this.props.name || this.props.label;
    var className = this.props.className + ' form-group';
    var errorMessage;
    if (this.showRequired()) {
      className += ' required';
      errorMessage = this.props.requiredMessage || this.getIntlMessage('validation.required');
    }
    if (this.showError()) {
     className += ' error';
     errorMessage = this.props.errorMessage || this.getIntlMessage('validation.cep');
    }

    return (
      <div className={className}>
        <label htmlFor='postal-code'>
          <FormattedMessage
            message={this.getIntlMessage(labelMessageKey)} />
        </label>
        <input type='text'
          id='postal-code'
          className='form-control'
          onChange={this.changeValue}
          tabIndex={this.props.tabIndex}
          value={this.getValue()}/>
        <p className="help-block error">
          {errorMessage}
        </p>
      </div>
    );
  }
});

export default PostalCode;
