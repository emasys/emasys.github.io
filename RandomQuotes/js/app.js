/**
 * Created by eMASYS ND on 8/12/2017.
 */

function openURL(url) {
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}
$(document).ready(function() {
    var url = "https://talaikis.com/api/quotes/random/";

    function getQuotes() {
        $.getJSON(url, function(data) {
            $('.tweet-logo').on('click', function() {
                openURL('https://twitter.com/intent/tweet?hashtags=freecodecamp&related=freecodecamp&text=' +
                    data.quote + " - " + data.author);
            })
            if (data.quote.length < 180) {
                $('.displayQuotes').text(data.quote);
                $('#author').text(data.author);
            } else {
                getQuotes();
            }
        });
    }

    $('.random-logo').on('click', function() {
        getQuotes();
    })

    getQuotes();

});