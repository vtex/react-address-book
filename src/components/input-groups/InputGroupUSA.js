import React from "react";
import TextInput from "../inputs/Text";
import SelectInput from "../inputs/Select";

var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

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
          required
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
        <SelectInput className='col-sm-4'
          name='state'
          options={states}
          required
          value={address.state}/>
        <TextInput className='col-sm-4'
          name='country'
          required
          tabIndex='-1'
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
