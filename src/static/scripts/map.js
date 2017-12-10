( function () {

ymaps.ready(init);
  var myMap, myPlacemark;

function init(){     
  myMap = new ymaps.Map("map", {
  center: [ 59.94, 30.30 ],
  zoom: 11,
  controls: [ "zoomControl" ],
  behaviors: [ "drag" ]
});

var coord = 
  [ [ 59.97, 30.31 ],
  [ 59.95, 30.38 ],
  [ 59.91, 30.48 ],
  [ 59.88, 30.31 ] ]

for ( var indx = 0; indx <= coord.length - 1; indx++ ) {
  myPlacemark = new ymaps.Placemark( coord[ indx ], {}, { 
    iconLayout: "default#image",
    iconImageHref: "svg/map-marker.svg",
    iconImageSize: [ 46, 57.727 ]
  });

  myMap.geoObjects.add(myPlacemark);  } 
}

})();