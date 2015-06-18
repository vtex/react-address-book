import React from "react";
import _ from "underscore";
import CEP from "../inputs/CEP";
import TextInput from "../inputs/Text";
import SelectInput from "../inputs/Select";

var states = ["","Ciudad Autónoma de Buenos Aires","Buenos Aires","Catamarca","Chaco","Chubut","Corrientes","Córdoba","Entre Ríos","Formosa","Jujuy","La Pampa","La Rioja","Mendoza","Misiones","Neuquén","Río Negro","Salta","San Juan","San Luis","Santa Cruz","Santa Fe","Santiago Del Estero","Tierra Del Fuego","Tucumán"];

export default function (address) {
  var className = 'input-group-' + address.country;
  return (
    <div className={className}>
      <div className='row'>
        <CEP className='col-sm-4' value={address.postalCode} country={address.country}/>
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
