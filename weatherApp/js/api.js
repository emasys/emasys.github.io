/**
 * Created by EMASYS ND on 7/6/2017.
 */
let f,
    s,
    t;

const days = date => {
    var timestamp = moment.unix(date);
    return timestamp.format("dddd");
}

const getIcon = (icon, classname, idName) => {
    if (icon === 'clear-day') {
        $(classname).css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/c" +
                "learDay.jpg\")");
        $(idName).addClass('ion-ios-sunny');
    } else if (icon === 'clear-night') {
        $(classname).css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/c" +
                "lear-night.png\")");
        $(idName).addClass('ion-ios-moon');
    } else if (icon === 'partly-cloudy-day') {
        $(classname).css("backgroundImage", "url(\"images/partly-cloudy.jpg\")");
        $(idName).addClass('ion-ios-partlysunny');
    } else if (icon === 'partly-cloudy-night') {
        $(classname).css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/p" +
                "artly-night.jpg\")");
        $(idName).addClass('ion-ios-cloudy-night');
    } else if (icon === 'cloudy') {
        $(classname).css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/c" +
                "loudy.jpg\")");
        $(idName).addClass('ion-ios-cloudy');
    } else if (icon === 'rain') {
        $(classname).css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/r" +
                "ain.jpg\")");
        $(idName).addClass('ion-ios-rainy');
    } else if (icon === 'sleet') {
        $(classname).css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/s" +
                "now.jpg\")");
        $(idName).addClass('ion-ios-rainy');
    } else if (icon === 'snow') {
        $(classname).css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/s" +
                "leet.jpeg\")");
        $(idName).addClass('ion-ios-snowy');
    } else if (icon === 'wind') {
        $(classname).css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/w" +
                "ind.jpg\")");
        $(idName).addClass('ion-leaf');
    } else if (icon === 'fog') {
        $(classname).css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/webDev/master/weatherApp/images/f" +
                "og.jpg\")");
        $(idName).addClass('ion-ios-analytics');
    }
}

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
            $('#temp').html(f + "<em>°F</em>");
            $('#minutely').html(s);
            $('#today').html(data.currently.summary);
            $('#bg').html(data.currently.icon);
            $('#summary').html(data.hourly.summary);

            // var timestamp = moment.unix(data.daily.data[0].time);

            var i = 0;

            if (data) {
                data
                    .daily
                    .data
                    .map((info) => {
                        i++;
                        // days(date.time);
                        $('#date' + i).html(days(info.time));
                        getIcon(info.icon, null, '#main' + i);
                        $('#temperature' + i).html(Math.floor(info.temperatureMax) + "<em>°F</em>");
                        $('#status' + i).html(info.icon)
                    })

            }

            let condition = data.currently.icon,
                classname = '.bgImg',
                idName = '#main';

            getIcon(condition, classname, idName);

        });

        $.getJSON(geocode + latitude + "," + longitude + geocodekey, function (data) {
            $('#city').html(data.results[1].formatted_address);

        });

    }

    function error() {
        $('#minutely').text("Unable to retrieve your location");
    }

}

weather();

const getCel = feh => {
    let cel = eval((feh - 32) * .5556);
    return Math.floor(cel);
}

const getFeh = cel => {
    let feh = eval(cel * 1.8 + 32);
    return Math.floor(feh);
}

$(document)
    .ready(function () {

        $('#cel').on('click', () => {
            if (!$('#cel').hasClass('clicked')) {
                let v = getCel(f);
                $('#temp').html(v + "<em>°C</em>");
                $('#cel').addClass('clicked');
                $('#fer').removeClass('clicked');
            }

        })

        $('#fer').on('click', () => {
            console.log();
            if ($('#cel').hasClass('clicked') && !$('#fer').hasClass('clicked')) {
                let v = $('#temp').text();
                v = v.substring(0, 2);
                v = getFeh(v);
                $('#temp').html(v + "<em>°F</em>");
                $('#fer').addClass('clicked');
                $('#cel').removeClass('clicked');
            }

        })

    });