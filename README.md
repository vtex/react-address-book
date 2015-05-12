# React Address Book

A simple address CRUD with validation, i18n and multiple countries support.

## Usage

Take a look at [the example index.html](examples/index.html).

## Latency compensation

This component favours a **latency compensation** approach to changes on data.

This means that any changes proposed by the user (e.g. selecting an address, updating an address, creating an address) are **accepted by default**, given they pass the client-side validation. This is called "optimistic update".

It is up to the component user to implement the necessary callbacks (e.g. `onValidSubmit`, `onSelect`) and update server-side data accordingly.

If the data update fails for some reason, the component user is encouraged to **re-render** the component with valid, pre-action data and **inform the user there was a problem with his action**.

## Options

These are the available options for the AddressBook component:

### `addressList` (required)

An array of address objects.

```
[
  {
    "addressType": "residential",
    "receiverName": "Joakim",
    "addressId": "-1429301413320",
    "postalCode": "22260000",
    "city": "Rio de Janeiro",
    "state": "RJ",
    "country": "BRA",
    "street": "Rua São Clemente",
    "number": "100",
    "neighborhood": "Botafogo",
    "complement": "num 1000",
    "reference": null,
    "geoCoordinates": [],
    "selected": true
  }
]
```

Optional address properties:

`selected`: This is the selected address.  
`editing`: This address is currently being edited.

### `messages` (required)

The messages dictionary. E.g. http://io.vtex.com.br/i18n/0.1.18/address/pt.json

### `locales` (required)

The locale selected. E.g. `pt`.

### `country` (required)

The country code for new addresses. E.g. `BRA`.

### `onSelect(address)`

Called when an user selects an address.

### `onValidSubmit(address)`

Called when an user submits a valid address.
It may be a new or existing address - check if the addressId matches any existing one.
