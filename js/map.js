function initMap() {
    var obj = JSON.parse(data);
    var June = obj.June
    var map;
    var googleMapsAuth = "poop"
    console.log(googleMapsAuth)
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(36.3575824, -94.20917380000003),
        mapTypeId: 'terrain'
    });

    for (i in June) {
        
        var Address = June[i].Address
        console.log(Address)
        let url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + Address + "&key=AIzaSyCvD82CsHfL--vFtotMwu5oo7ttRrZMXWE";
        console.log(url)
         fetch(url)
            .then(res => res.json())
             .then((out) => {
                console.log('Checkout this JSON! ', out);
        })
        .catch(err => { throw err });
        var lati = June[i].Latitude;
        var lng = June[i].Longitude;
        console.log(lati + "," + lng)

        var latiLng = new google.maps.LatLng(lati, lng);
        var marker = new google.maps.Marker({
            position: latiLng,
            map: map
        });
    }
}

$("#residential").hover(function () {
    $(this).fadeTo('fast', 0.5);
});