var ReactAddressBook = require('./ReactAddressBook');
var React = require('react');
var _ = require('underscore')
var content = document.getElementById('content');

var sampleUSAddress = {
    "address_components" : [
        {
            "long_name" : "1600",
            "short_name" : "1600",
            "types" : [ "street_number" ]
        },
        {
            "long_name" : "Amphitheatre Parkway",
            "short_name" : "Amphitheatre Pkwy",
            "types" : [ "route" ]
        },
        {
            "long_name" : "Mountain View",
            "short_name" : "Mountain View",
            "types" : [ "locality", "political" ]
        },
        {
            "long_name" : "Santa Clara County",
            "short_name" : "Santa Clara County",
            "types" : [ "administrative_area_level_2", "political" ]
        },
        {
            "long_name" : "California",
            "short_name" : "CA",
            "types" : [ "administrative_area_level_1", "political" ]
        },
        {
            "long_name" : "United States",
            "short_name" : "US",
            "types" : [ "country", "political" ]
        },
        {
            "long_name" : "94043",
            "short_name" : "94043",
            "types" : [ "postal_code" ]
        }
    ],
    "formatted_address" : "1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
    "geometry" : {
        "location" : {
            "lat" : 37.4224764,
            "lng" : -122.0842499
        },
        "location_type" : "ROOFTOP",
        "viewport" : {
            "northeast" : {
                "lat" : 37.4238253802915,
                "lng" : -122.0829009197085
            },
            "southwest" : {
                "lat" : 37.4211274197085,
                "lng" : -122.0855988802915
            }
        }
    },
    "place_id" : "ChIJ2eUgeAK6j4ARbn5u_wAGqWA",
    "types" : [ "street_address" ]
};

var sampleBRAddress = {
  "address_components" : [
    {
      "long_name" : "114",
      "short_name" : "114",
      "types" : [ "street_number" ]
    },
    {
      "long_name" : "Rua São Clemente",
      "short_name" : "R. São Clemente",
      "types" : [ "route" ]
    },
    {
      "long_name" : "Botafogo",
      "short_name" : "Botafogo",
      "types" : [ "neighborhood", "political" ]
    },
    {
      "long_name" : "Rio de Janeiro",
      "short_name" : "Rio de Janeiro",
      "types" : [ "locality", "political" ]
    },
    {
      "long_name" : "Rio de Janeiro",
      "short_name" : "Rio de Janeiro",
      "types" : [ "administrative_area_level_2", "political" ]
    },
    {
      "long_name" : "Rio de Janeiro",
      "short_name" : "RJ",
      "types" : [ "administrative_area_level_1", "political" ]
    },
    {
      "long_name" : "Brazil",
      "short_name" : "BR",
      "types" : [ "country", "political" ]
    },
    {
      "long_name" : "22260",
      "short_name" : "22260",
      "types" : [ "postal_code_prefix", "postal_code" ]
    }
  ],
  "formatted_address" : "Rua São Clemente, 114 - Botafogo, Rio de Janeiro - RJ, Brazil",
  "geometry" : {
    "location" : {
      "lat" : -22.9492779,
      "lng" : -43.1862238
    },
    "location_type" : "ROOFTOP",
    "viewport" : {
      "northeast" : {
        "lat" : -22.9479289197085,
        "lng" : -43.1848748197085
      },
      "southwest" : {
        "lat" : -22.9506268802915,
        "lng" : -43.1875727802915
      }
    }
  },
  "place_id" : "ChIJ9bnXr-9_mQARX-_K--HY_4k",
  "types" : [ "street_address" ]
};

var onSelect = function(address) {
  console.log('address!', address);
  _.each(addressList, function(a) {
    if (a===address) {
      a.selected = true;
    }
    else {
      a.selected = false;
    }
  });
  render();
};

var addressList = [sampleUSAddress, sampleBRAddress];

var render = function() {
  React.render((
    <div>
      <ReactAddressBook addressList={addressList} onSelect={onSelect}/>
    </div>
  ), content);
};

render();
