import React from "react";
import ReactIntl, {IntlMixin, FormattedMessage} from "react-intl";
import "../styles/address-summary.less";

var AddressSummary = React.createClass({
  mixins: [ReactIntl.IntlMixin],

  onCheck() {
    if (this.props.onSelect) {
      this.props.onSelect(this.props.address);
    }
  },

  onEdit() {
    if (this.props.onEdit) {
      this.props.onEdit(this.props.address);
    }
  },

  render() {
    if (!this.props.address) {
      return;
    }
    var country = this.props.address.country;
    var countrySummary = require('./summaries/Summary' + country);

    return (
      <div className='address-summary'>
        <div className='selected'>
          <label>
            <input type="checkbox"
                   checked={this.props.address.selected}
                   onChange={this.onCheck}/>
             <FormattedMessage
               message={this.getIntlMessage('selected')} />
          </label>
        </div>
        {countrySummary(this.props.address)}
        <div className='edit'>
          <label>
            <button className='btn btn-link'
                    onClick={this.onEdit}>
              <FormattedMessage
                message={this.getIntlMessage('edit')} />
            </button>
          </label>
        </div>
      </div>
    );
  }
});

export default AddressSummary;
