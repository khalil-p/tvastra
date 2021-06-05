function initMap(){
    const bilal = {lat:19.192900, lng:72.986940};
    const map = new google.maps.Map(document.getElementById("map"),{
        zoom: 4,
        center: bilal,
    });
    const marker = new google.maps.Marker({
        position: bilal,
        map: map,
    });
}