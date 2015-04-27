import React from "react";
import CEP from "../inputs/CEP";
import Text from "../inputs/Text";

export default function (address) {
  var className = 'input-group-' + address.country;
  return (
    <div className={className}>
      <div className='row'>
        <CEP className='col-sm-4' value={address.postalCode}/>
      </div>
      <div className='row'>
        <Text className='col-sm-8'
          name='street'
          required
          value={address.street}/>
      </div>
      <div className='row'>
        <Text className='col-sm-4'
          name='number'
          required
          value={address.number}/>
        <Text className='col-sm-4'
          name='complement'
          required
          value={address.complement}/>
        <Text className='col-sm-4'
          name='neighborhood'
          required
          value={address.neighborhood}/>
      </div>
      <div className='row'>
        <Text className='col-sm-4'
          name='city'
          required
          value={address.city}/>
        <Text className='col-sm-4'
          name='state'
          required
          value={address.state}/>
        <Text className='col-sm-4'
          name='country'
          required
          value={address.country}/>
      </div>
      <div className='row'>
        <Text className='col-sm-4'
          name='receiverName'
          required
          value={address.receiverName}/>
      </div>
    </div>
  );
}
