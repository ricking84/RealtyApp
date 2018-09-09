// const http = require("http");

var geocoder;
var map;

function initMap() {
    geocoder = new google.maps.Geocoder();
    //map center lat/long (bentonville)
    var LongCenter = -94.20917380000003;
    var LatCenter = 36.3575824;
    var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(LatCenter, LongCenter),
        mapTypeId: 'terrain'
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    //build map
    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    var marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        position: { lat: LatCenter, lng: LongCenter },
        title: 'Center Marker',
        icon: image
    });

    // var somedata = require('./data.js');

    // console.log(somedata.Address);
    // for (var i in Address) {
    //     geocoder.geocode({ 'address': Address }, function (results, status) {
    //         if (status == 'OK') {
    //             // console.log(Address);
    //             // map.setCenter(results[0].geometry.location);
    //             // var marker = new google.maps.Marker({
    //             //     map: map,
    //             //     position: results[0].geometry.location
    //             // });
    //         } else {
    //             alert('Geocode was not successful for the following reason: ' + status);
    //         };
    //     });
    // };

};