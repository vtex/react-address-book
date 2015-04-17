'use strict';

var React = require('react');
var _ = require('underscore');

require('normalize.css');
require('../styles/address-summary.less');

var ReactAddressSummary = React.createClass({
  handleClick: function() {
    if (this.props.onSelect) {
      this.props.onSelect(this.props.address);
    }
  },

  renderAddressLineOne: function() {
    var country = this.props.address.country;
    switch (country) {
      case 'US':
        return <p>{this.props.address.number},
           {this.props.address.street}</p>;
      case 'BR':
      default:
        return <p>{this.props.address.street}, {this.props.address.number}, {this.props.address.complement} - {this.props.address.neighborhood}</p>;
    }
  },

  renderAddressLineTwo: function() {
    return <p>{this.props.address.city} - {this.props.address.state} - {this.props.address.country}</p>;
  },

  renderAddressLineThree: function() {
    return <p>{this.props.address.postalCode}</p>;
  },

  render: function() {
    return (
      <div className='address-summary' onClick={this.handleClick}>
        <div className='selected'>
          <label>
            <input type="checkbox" checked={this.props.address.selected}/>
            <span>Selecionado</span>
          </label>
        </div>
        <div className='address-lines'>
          <p className='address-line-1'>{this.renderAddressLineOne()}</p>
          <p className='address-line-2'>{this.renderAddressLineTwo()}</p>
          <p className='address-line-3'>{this.renderAddressLineThree()}</p>
        </div>
      </div>
    );
  }
});

module.exports = ReactAddressSummary;
