/**
 * Created by eMASYS ND on 8/12/2017.
 */

function openURL(url) {
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}
$(document).ready(function() {
    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en";

    function getQuotes() {
        $.ajax({
            url: url,
            type: "Get",
            dataType: 'jsonp',
            data: "method=getQuote&format=jsonp&lang=en&jsonp=?",

            success: function(data) {
                console.log(JSON.stringify(data));
                $('.tweet-logo').on('click', function() {
                    openURL('https://twitter.com/intent/tweet?hashtags=freecodecamp&related=freecodecamp&text=' +
                        data.quoteText + " - " + data.quoteAuthor);
                })
                if (data.quoteText.length < 180) {
                    $('.displayQuotes').text(data.quoteText);
                    $('#author').text(data.quoteAuthor);
                } else {
                    getQuotes();
                }
            },
            error: function(data) {
                console.log(JSON.stringify(data));
                $('.displayQuotes').text("something went wrong");
            }
        });

    };

    $('.random-logo').on('click', function() {
        getQuotes();
    })

    getQuotes();

});