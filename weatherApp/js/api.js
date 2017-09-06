/**
 * Created by EMASYS ND on 7/6/2017.
 */
var f,
    s,
    t;

function weather() {

    var apiKey = '17eca980f3421907cabe87450e4de798',
        url = 'https://api.forecast.io/forecast/',
        geocode = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=',
        geocodekey = '&key=AIzaSyDJrBZqHselB1Xim5ft5r1bI65_5gOOpvA';

    navigator
        .geolocation
        .getCurrentPosition(success, error);

    function success(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function (data) {

            f = Math.floor(data.currently.temperature);
            s = data.daily.summary;
            $('#temp').html(f + '°F');
            $('#minutely').html(s);
            $('#today').html(data.currently.summary);
            $('#bg').html(data.currently.icon);

            var condition = data.currently.icon;

            if (condition == "partly-cloudy-day") {

                $(' .img-sync').css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/p" +
                        "artly_cloudy.jpg\")");

            }
            if (condition == "wind") {

                $(' .img-sync').css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/w" +
                        "ind.jpg\")");
            }
            if (condition == "partly-cloudy-night") {

                $(' .img-sync').css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/p" +
                        "artly-night.jpg\")");
            }

            if (condition == "fog") {

                $(' .img-sync').css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/f" +
                        "og.jpg\")");
            }

            if (condition == "cloudy") {

                $(' .img-sync').css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/c" +
                        "loudy.jpg\")");
            }

            if (condition == "rain") {

                $(' .img-sync').css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/r" +
                        "ain.jpg\")");
            }
            if (condition == "snow") {

                $(' .img-sync').css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/s" +
                        "leet.jpeg\")");
            }
            if (condition == "sleet") {

                $(' .img-sync').css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/s" +
                        "now.jpg\")");
            }
            if (condition == "clear-day") {

                $(' .img-sync').css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/c" +
                        "learDay.jpg\")");
            }
            if (condition == "clear-night") {

                $(' .img-sync').css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/c" +
                        "lear-night.png\")");
            }

        });

        $.getJSON(geocode + latitude + "," + longitude + geocodekey, function (data) {
            console.log(data);

            $('#city').html(data.results[0].formatted_address);

        });

    }

    function error() {
        $('#minutely').text("Unable to retrieve your location");
    }

}

weather();

$(document).ready(function () {

    $('#temp')
        .on('click', function () {
            if ($(this).val === (f + '°F')) {
                var c = (5 / 9) * (f - 32);
                $(this).text(Math.floor(c) + "°C");
                console.log("something");
            }
        })

    $("#convFtoC").hide();
    $("#convCtoF").click(function () {
        var c = (5 / 9) * (f - 32);
        document
            .getElementById("temp")
            .innerHTML = Math.floor(c) + "°C";
        $("#convCtoF").hide();
        $("#convFtoC").show();
    });

    $("#convFtoC").click(function () {
        document
            .getElementById("temp")
            .innerHTML = f + "°F";
        $("#convFtoC").hide();
        $("#convCtoF").show();
    });
});