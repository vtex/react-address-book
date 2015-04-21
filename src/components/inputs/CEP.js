var React = require('react');
var Formsy = require('formsy-react');

Formsy.addValidationRule('isCEP', function (values, value) {
  return /^([\d]{5})\-?([\d]{3})$/.test(value);
});

var CEP = React.createClass({
  mixins: [Formsy.Mixin],

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
      errorMessage = 'Este campo é obrigatório';
    }
    if (this.showError()) {
      className += ' error';
      errorMessage = 'Por favor, informe um CEP válido';
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
