/**
 * Created by EMASYS ND on 7/6/2017.
 */
var f, s, t;

function weather() {

    var location = document.getElementById("location");
    var apiKey = '17eca980f3421907cabe87450e4de798';
    var url = 'https://api.forecast.io/forecast/';
    var url1 = 'http://maps.googleapis.com/maps/api/geocode/json?latlng='

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        location.innerHTML = latitude + ', '+ longitude;

        $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
            t  = "this service is no longer supported, Although we know you're somewhere in " +data.timezone;


            f = Math.floor(data.currently.temperature);
            s = data.currently.summary;
            $('#temp').html(f + '°F');
            $('#minutely').html(s);
            $('#bg').html(data.currently.icon);

            var condition = data.currently.icon;

            if(condition == "partly-cloudy-day"){

                $('.site-wrapper').css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/partly_cloudy.jpg\")");


            }
            if(condition == "wind") {

                $('.site-wrapper').css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/wind.jpg\")");
            }
            if(condition == "partly-cloudy-night") {

                $('.site-wrapper').css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/partly-night.jpg\")");
            }

            if(condition == "fog") {

                $('.site-wrapper').css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/fog.jpg\")");
            }

            if(condition == "cloudy") {

                $('.site-wrapper').css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/cloudy.jpg\")");
            }

            if(condition == "rain") {

                $('.site-wrapper').css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/rain.jpg\")");
            }
            if(condition == "snow") {

                $('.site-wrapper').css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/sleet.jpeg\")");
            }
            if(condition == "sleet") {

                $('.site-wrapper').css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/snow.jpg\")");
            }
            if(condition == "clear-day") {

                $('.site-wrapper').css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/clearDay.jpg\")");
            }
            if(condition == "clear-night") {

                $('.site-wrapper').css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/clear-night.png\")");
            }


        });

        $.getJSON(url1 + latitude + "," + longitude + "&sensor=true", function(data) {
            if(data.length < 1){
                $('#city').html(data.results[0].formatted_address);
            }else{
                $('#info').html("Real time weather forecast<br>for your current location");
            }
        });

    }

    function error() {
        location.innerHTML = "Unable to retrieve your location";
    }

    location.innerHTML = "Locating...";
}


weather();

$(document).ready(function(){


    $("#convFtoC").hide();
    $("#convCtoF").click(function(){
        var c = (5/9) * (f - 32);
        document.getElementById("temp").innerHTML = Math.floor(c) + "°C";
        $("#convCtoF").hide();
        $("#convFtoC").show();
    });

    $("#convFtoC").click(function() {
        document.getElementById("temp").innerHTML = f + "°F";
        $("#convFtoC").hide();
        $("#convCtoF").show();
    });
});

