var React = require('react');
var Formsy = require('formsy-react');

var Street = React.createClass({
  mixins: [Formsy.Mixin],

  getDefaultProps: function () {
    return {
      name: 'street',
      validations: 'isAlphaNumericPunctuation',
      required: true
    };
  },

  changeValue: function (event) {
    this.setValue(event.currentTarget.value);
  },

  render: function () {
    var className = this.props.className + ' form-group'
    var errorMessage;
    if (this.showRequired()) {
      className += ' required';
      errorMessage = 'Este campo é obrigatório';
    }
    if (this.showError()) {
      className += ' error';
      errorMessage = 'Por favor, digite apenas letras e números';
    }

    return (
      <div className={className}>
        <label htmlFor='street'>Rua</label>
        <input type='text'
          id='street'
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

module.exports = Street;
