'use strict';

angular.module('mygab')
        .factory('geoLocationService', ['$q', function ($q) {

                var deferred = $q.defer();

                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(_successFunction, _errorFunction);
                }
                var geocoder = new google.maps.Geocoder();


                function _successFunction(position) {
                    var lat = position.coords.latitude;
                    var lng = position.coords.longitude;

                    var latlng = new google.maps.LatLng(lat, lng);
                    geocoder.geocode({'latLng': latlng}, function (results, status) {


                        if (status === google.maps.GeocoderStatus.OK) {
                            if (results[2]) {
                                deferred.resolve(results[2].address_components[0].long_name);
                            } else {
                                alert("No results found");
                            }
                        } else {
                            alert("Geocoder failed due to: " + status);
                        }
                    });


                }

                function _errorFunction() {
                    // Something on error
                }

                return deferred.promise;


            }]);
