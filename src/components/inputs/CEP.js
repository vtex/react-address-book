var React = require('react');
var Formsy = require('formsy-react');
var ReactIntl = require('react-intl');
var IntlMixin = ReactIntl.IntlMixin;

Formsy.addValidationRule('isCEP', function (values, value) {
  return /^([\d]{5})\-?([\d]{3})$/.test(value);
});

var CEP = React.createClass({
  mixins: [Formsy.Mixin, IntlMixin],

  getDefaultProps: function () {
    return {
      name: 'postalCode',
      validations: 'isCEP',
      required: true
    };
  },

  changeValue: function (event) {
    this.setValue(event.currentTarget.value);
  },

  render: function () {
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
        <label htmlFor='cep'>CEP</label>
        <input type='text'
          id='cep'
          className='form-control'
          onChange={this.changeValue}
          value={this.getValue()}/>
        <p className="help-block error">
          {errorMessage}
        </p>
      </div>
    );
  }
});

module.exports = CEP;
