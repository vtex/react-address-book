import React from "react";
import Formsy from "formsy-react";
import ReactIntl, { IntlMixin, FormattedMessage } from "react-intl";

var TextInput = React.createClass({
  mixins: [Formsy.Mixin, IntlMixin],

  getDefaultProps() {
    return {
      id: 'input-' + (Math.random() * 100000).toFixed(),
      validations: 'isAlphaNumericPunctuation'
    };
  },

  changeValue(event) {
    this.setValue(event.currentTarget.value);
  },

  render() {
    var labelMessageKey = 'form.' + this.props.name || this.props.label;
    var className = this.props.className + ' form-group';
    var errorMessage;
    if (!this.isPristine() && this.showRequired()) {
      className += ' required';
      errorMessage = this.props.requiredMessage || this.getIntlMessage('validation.required');
    }
    if (!this.isPristine() && this.showError()) {
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
          value={this.getValue()}
          tabIndex={this.props.tabIndex}
          readOnly={this.props.readOnly}/>
        <p className="help-block error">
          {errorMessage}
        </p>
      </div>
    );
  }
});

export default TextInput;
