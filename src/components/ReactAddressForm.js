'use strict';

var React = require('react');
var _ = require('underscore');

require('normalize.css');
require('../styles/address-form.less');

var addressLineOne = function(address) {
  return [
    {
      label: "Postal code",
      placeholder: "Postal code",
      value: address.postalCode,
      size: 3
    }
  ];
};

var addressLineTwo = function(address) {
  return [
    {
      label: "Street",
      placeholder: "Street",
      value: address.street,
      size: 4
    },
    {
      label: "Number",
      placeholder: "Number",
      value: address.number,
      size: 2
    },
    {
      label: "Complement",
      placeholder: "Complement",
      value: address.complement,
      size: 3
    },
    {
      label: "Neighborhood",
      placeholder: "Neighborhood",
      value: address.neighborhood,
      size: 3
    }
  ];
};

var addressLineThree = function(address) {
  return [
    {
      label: "City",
      placeholder: "City",
      value: address.city,
      size: 3
    },
    {
      label: "State",
      placeholder: "State",
      value: address.state,
      size: 3
    },
    {
      label: "Country",
      placeholder: "Country",
      value: address.country,
      size: 3
    }
  ];
};

var FormInput = React.createClass({
  render: function() {
    var className = 'form-group col-sm-' + this.props.size;
    return (
      <div className={className}>
        <label htmlFor='address-input'>{this.props.label}</label>
        <input type="text" id='address-input'
          className='form-control'
          placeholder={this.props.placeholder}
          value={this.props.value}/>
      </div>
    );
  }
});

var ReactAddressForm = React.createClass({
  handleAddressInputChange: function(e) {
    console.log(e.target.value);
    if (this.props.onChangeInput) {
      this.props.onChangeInput(e.target.value);
    }
  },

  getDefaultProps: function() {
    return {
      address: {}
    };
  },

  render: function() {
    var renderInput = function(p) {
      return <FormInput {...p}/>
    };
    var line1 = addressLineOne(this.props.address).map(renderInput);
    var line2 = addressLineTwo(this.props.address).map(renderInput);
    var line3 = addressLineThree(this.props.address).map(renderInput);
    return (
      <div className='address-form'>
        <form>
          <div className='address-line-1 row'>
            {line1}
          </div>
          <div className='address-line-2 row'>
            {line2}
          </div>
          <div className='address-line-3 row'>
            {line3}
          </div>
          <button className='btn btn-primary'>Save</button>
        </form>
      </div>
    );
  }
});

module.exports = ReactAddressForm;
