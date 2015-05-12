import React from "react";
import _ from "underscore";
import TextInput from "../inputs/Text";

export default function (address) {
  var className = 'input-group-' + address.country;
  return (
    <div className={className}>
      <div className='row'>
        <TextInput className='col-sm-4'
          name='postalCode'
          required
          value={address.postalCode}/>
      </div>
      <div className='row'>
        <TextInput className='col-sm-8'
          name='street'
          required
          value={address.street}/>
      </div>
      <div className='row'>
        <TextInput className='col-sm-4'
          name='number'
          required
          value={address.number}/>
        <TextInput className='col-sm-4'
          name='complement'
          value={address.complement}/>
        <TextInput className='col-sm-4'
          name='neighborhood'
          required
          value={address.neighborhood}/>
      </div>
      <div className='row'>
        <TextInput className='col-sm-4'
          name='city'
          required
          value={address.city}/>
        <TextInput className='col-sm-4'
          name='state'
          required
          value={address.state}/>
        <TextInput className='col-sm-4'
          name='country'
          required
          tabIndex='-1'
          readOnly='readonly'
          value={address.country}/>
      </div>
      <div className='row'>
        <TextInput className='col-sm-4'
          name='receiverName'
          required
          value={address.receiverName}/>
      </div>
    </div>
  );
}
