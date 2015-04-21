# React Address Book

A simple address CRUD with validation, i18n and multiple countries support.

## Usage

Include React (0.13) and `dist/react-address-book-factory.js` scripts on your page:

    <script src='https://cdnjs.cloudflare.com/ajax/libs/react/0.13.2/react.min.js'></script>
    <script src='https://io.vtex.com.br/react-address-book/0.1.0/react-address-book-factory.js'></script>

Then, use `React.render` and the global `window.vtex.ReactAddressBook` variable to render the component to a given DOM element:

    var addressList = [/*VTEX address JSON array*/];

    var onValidSubmit = function(address) {
      console.log('address submited!', address);
    };

    var options = {
      addressList: addressList,
      onValidSubmit: onValidSubmit
    };

    var content = document.getElementById('content');

    React.render(vtex.AddressBook(options), content);

If any outside changes happens to your data, simple re-render the component:

    React.render(vtex.AddressBook(options), content);

## Latency compensation

This component implements a **latency compensation** approach to changes on data.

This means that any changes proposed by the user (e.g. selecting an address, updating an address, creating an address) are **accepted by default**, given they pass the client-side validation.

It is up to the component user to implement the necessary callbacks (e.g. `onValidSubmit`, `onSelect`) and update server-side data accordingly.

If the data update fails for some reason, the component user is encouraged to **re-render** the component with valid, pre-action data and **inform the user there was a problem with his action**.

For convenience, an `errorMessage` option is offered, but this communication can be handled by any other component in the application.

## Options [WIP]

These are the available options for the AddressBook component:

### addressList

### onSelect

### onValidSubmit

### TODO: errorMessage

### TODO: locale
