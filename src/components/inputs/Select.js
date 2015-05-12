import React from "react";
import Formsy from "formsy-react";
import ReactIntl, {IntlMixin, FormattedMessage} from "react-intl";

var SelectInput = React.createClass({
  mixins: [Formsy.Mixin, IntlMixin],

  getDefaultProps() {
    return {
      id: 'input-' + (Math.random() * 100000).toFixed()
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
      errorMessage = this.props.errorMessage || this.getIntlMessage('validation.alphaNumericPunctuation');
    }

    var options = this.props.options.map(function (o) {
      let value = o.value ? o.value : o;
      let label = o.label ? o.label : o;
      return <option value={value}>{label}</option>;
    });

    return (
      <div className={className}>
        <label htmlFor={this.props.id}>
          <FormattedMessage
            message={this.getIntlMessage(labelMessageKey)} />
        </label>
        <select
          id={this.props.id}
          className='form-control'
          onChange={this.changeValue}
          tabIndex={this.props.tabIndex}
          value={this.getValue()}>
          {options}
        </select>
        <p className="help-block error">
          {errorMessage}
        </p>
      </div>
    );
  }
});

export default SelectInput;
