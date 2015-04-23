var React = require('react');
var Formsy = require('formsy-react');

var Text = React.createClass({
  mixins: [Formsy.Mixin],

  getDefaultProps: function () {
    return {
      id: 'input-' + (Math.random() * 100000).toFixed(),
      validations: 'isAlphaNumericPunctuation',
      errorMessage: 'Por favor, digite apenas letras e números'
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
      errorMessage = this.props.errorMessage;
    }

    return (
      <div className={className}>
        <label htmlFor={this.props.id}>Rua</label>
        <input type='text'
          id={this.props.id}
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

module.exports = Text;
