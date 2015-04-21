var React = require('react');
require('../styles/address-summary.less');

var AddressSummary = React.createClass({
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
            <span>Selecionado</span>
          </label>
        </div>
        {countrySummary(this.props.address)}
        <div className='edit'>
          <label>
            <button className='btn btn-link'
                    onClick={this.onEdit}>
              Editar
            </button>
          </label>
        </div>
      </div>
    );
  }
});

module.exports = AddressSummary;
