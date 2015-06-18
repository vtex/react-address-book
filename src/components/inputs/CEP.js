import React from "react";
import Formsy from "formsy-react";
import ReactIntl, {IntlMixin} from "react-intl";

//Formsy.addValidationRule('isCEP', function (values, value) {
//  return /^([\d]{5})\-?([\d]{3})$/.test(value);
//});

var CEP = React.createClass({
  mixins: [Formsy.Mixin, IntlMixin],

  getDefaultProps() {
    return {
      name: 'postalCode',
      //validations: 'isCEP',
      required: true
    };
  },

  changeValue(event) {
    this.setValue(event.currentTarget.value);
  },

  render() {
    var className = this.props.className + ' form-group';

    var errorMessage;
    if (this.showRequired()) {
      className += ' required';
      errorMessage = this.props.requiredMessage || this.getIntlMessage('validation.required');
    }
    var country = this.props.country;
    var regex = null;
    switch (country){
      case 'BRA':
        regex = /^([\d]{5})\-?([\d]{3})$/;
        break;
      case 'ARG':
        regex = /^([\d]{4})$/;
        break;
    }
    if (regex != null && !regex.test(this.props.value)){
      className += ' error';
      errorMessage = this.props.errorMessage || this.getIntlMessage('validation.cep');      
    }
    //console.log(country, regex);
    //if (this.showError()) {
    //  className += ' error';
    //  errorMessage = this.props.errorMessage || this.getIntlMessage('validation.cep');
    //}

    return (
      <div className={className}>
        <label htmlFor='cep'>CEP</label>
        <input type='text'
          id='cep'
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

export default CEP;
