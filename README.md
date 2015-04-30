# React Address Book

A simple address CRUD with validation, i18n and multiple countries support.

## Usage

Take a look at [the example index.html](examples/index.html).

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
