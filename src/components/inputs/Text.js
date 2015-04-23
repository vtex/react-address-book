var React = require('react');
var Formsy = require('formsy-react');
var ReactIntl = require('react-intl');
var IntlMixin = ReactIntl.IntlMixin;
var FormattedMessage = ReactIntl.FormattedMessage;

var Text = React.createClass({
  mixins: [Formsy.Mixin, IntlMixin],

  getDefaultProps: function () {
    return {
      id: 'input-' + (Math.random() * 100000).toFixed(),
      validations: 'isAlphaNumericPunctuation'
    };
  },

  changeValue: function (event) {
    this.setValue(event.currentTarget.value);
  },

  render: function () {
    var labelMessageKey = this.props.name || this.props.label;
    var className = this.props.className + ' form-group'
    var errorMessage;
    if (this.showRequired()) {
      className += ' required';
      errorMessage = this.props.requiredMessage || this.getIntlMessage('validation.required');
    }
    if (this.showError()) {
      className += ' error';
      errorMessage = this.props.errorMessage || this.getIntlMessage('validation.alphaNumericPunctuation');
    }

    return (
      <div className={className}>
        <label htmlFor={this.props.id}>
          <FormattedMessage
            message={this.getIntlMessage(labelMessageKey)} />
        </label>
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
