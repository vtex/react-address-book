var React = require('react');
var ReactIntl = require('react-intl');
var IntlMixin = ReactIntl.IntlMixin;
var FormattedMessage = ReactIntl.FormattedMessage;
require('../styles/address-summary.less');

var AddressSummary = React.createClass({
  mixins: [ReactIntl.IntlMixin],
  
  onCheck: function() {
    if (this.props.onSelect) {
      this.props.onSelect(this.props.address);
    }
  },

  onEdit: function() {
    if (this.props.onEdit) {
      this.props.onEdit(this.props.address);
    }
  },

  render: function() {
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

module.exports = AddressSummary;
