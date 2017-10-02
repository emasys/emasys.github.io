/**
 * Created by EMASYS ND on 7/6/2017.
 */
let f,
    s,
    d = [],
    t;

const days = date => {
    var timestamp = moment.unix(date);
    return timestamp.format("dddd");
}

const getIcon = (icon, classname, idName) => {
    if (icon === 'clear-day') {
        $(classname).css("backgroundImage", "url('https://raw.githubusercontent.com/emasys/emasys.github.io/master/weatherApp" +
                "/images/clearDay.jpg')");
        $(idName).addClass('ion-ios-sunny');
    } else if (icon === 'clear-night') {
        $(classname).css("backgroundImage", "url('https://raw.githubusercontent.com/emasys/emasys.github.io/master/weatherApp" +
                "/images/clear-night.png')");
        $(idName).addClass('ion-ios-moon');
    } else if (icon === 'partly-cloudy-day') {
        $(classname).css("backgroundImage", "url('https://raw.githubusercontent.com/emasys/emasys.github.io/master/weatherApp" +
                "/images/partly-cloudy.jpg')");
        $(idName).addClass('ion-ios-partlysunny');
    } else if (icon === 'partly-cloudy-night') {
        $(classname).css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/emasys.github.io/master/weatherAp" +
                "p/images/partly-night.jpg\")");
        $(idName).addClass('ion-ios-cloudy-night');
    } else if (icon === 'cloudy') {
        $(classname).css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/emasys.github.io/master/weatherAp" +
                "p/images/cloudy.jpg\")");
        $(idName).addClass('ion-ios-cloudy');
    } else if (icon === 'rain') {
        $(classname).css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/emasys.github.io/master/weatherAp" +
                "p/images/rain.jpg\")");
        $(idName).addClass('ion-ios-rainy');
    } else if (icon === 'sleet') {
        $(classname).css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/emasys.github.io/master/weatherAp" +
                "p/images/snow.jpg\")");
        $(idName).addClass('ion-ios-rainy');
    } else if (icon === 'snow') {
        $(classname).css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/emasys.github.io/master/weatherAp" +
                "p/images/sleet.jpeg\")");
        $(idName).addClass('ion-ios-snowy');
    } else if (icon === 'wind') {
        $(classname).css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/emasys.github.io/master/weatherAp" +
                "p/images/wind.jpg\")");
        $(idName).addClass('ion-leaf');
    } else if (icon === 'fog') {
        $(classname).css("backgroundImage", "url(\"https://raw.githubusercontent.com/emasys/emasys.github.io/master/weatherAp" +
                "p/images/fog.jpg\")");
        $(idName).addClass('ion-ios-analytics');
    }
}

const weather = () => {

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
            $('#cond').html(data.currently.summary);
            $('#summary').html(data.hourly.summary);

            // var timestamp = moment.unix(data.daily.data[0].time);

            if (data) {
                data
                    .daily
                    .data
                    .map((info, index) => {
                        d[index] = Math.floor(info.temperatureMax);

                        // days(date.time);
                        $('#date' + index).html(days(info.time));
                        getIcon(info.icon, null, '#main' + index);
                        $('#temperature' + index).html(Math.floor(info.temperatureMax) + "<em>°F</em>");
                        $('#status' + index).html(info.summary)
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
        $('#city').text("Unable to retrieve your location");
    }

}

weather();

const getCel = feh => {
    let cel = eval((feh - 32) * (5 / 9));
    return Math.floor(cel);
}

const getFeh = cel => {
    let feh = eval((cel * (9 / 5)) + 32);
    return Math.floor(feh);
}

$(document)
    .ready(function () {

        $('#cel').on('click', () => {
            if (!$('#cel').hasClass('clicked')) {
                let v = getCel(f);
                $('#temp').html(v + "<em>°C</em>");
                let temp = '';
                for (let i = 1; i <= 3; i++) {
                    temp = $('#temperature' + i).text();
                    temp = temp.substring(0, 2);
                    temp = getCel(temp);
                    $('#temperature' + i).html(temp + "<em>°C</em>")
                }

                $('#cel').addClass('clicked');
                $('#fer').removeClass('clicked');
            }

        })

        $('#fer').on('click', () => {
            if ($('#cel').hasClass('clicked') && !$('#fer').hasClass('clicked')) {

                $('#temp').html(f + "<em>°F</em>");

                for (let i = 1; i <= 3; i++) {
                    let temp = '',
                        fix = 0,
                        final = 0;
                    $('#temperature' + i).html(d[i] + "<em>°F</em>")
                }
                $('#fer').addClass('clicked');
                $('#cel').removeClass('clicked');
            }

        })

    });