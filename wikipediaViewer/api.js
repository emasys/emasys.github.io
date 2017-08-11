/**
* Created by EMASYS ND on 7/8/2017.
*/
var endPoint = "https://en.wikipedia.org/w/api.php?callback=?";
$(document).ready(function() {
    $("#search").on("submit", function() {
        $("#display").empty();
        $.getJSON(endPoint, {
            action: 'query',
            format: 'json',
            inprop: "url",
            formatversion: 2,
            generator: 'search',
            gsrsearch: $("#search_input").val(),
            gsrwhat: "text",
            prop: 'extracts|info',
            exsentences: 3,
            exintro: "",
            explaintext: "",
            exlimit: 20
        })
            .success(function (data) {

                try {
                    data.query.pages.forEach(function (response) {
                        var title = response.title;
                        var body = response.extract;
                        var link = response.fullurl

                        if (body.length > 200) {
                            $('#display').append(
                                    "<div class='lead display beautify-box'><h2>" + title + "</h2></p><p>" + body.substring(0, 200) + "... <a href='" + link + "' target= '_blank'><em>learn more</em></a></p></div>");
                        }
                        else{
                            $('#display').append(
                                    "<div class='lead display beautify-box'><h2>" + title + "</h2></p><p>" + body+ "</p></div>");
                        }
                    })
                }catch(err){
                    $('#display').append("<div class='lead display text-center beautify-box'><p> Sorry, your query returned no results.</p></div>");
                }
            });
        return false;
    });
    $("#random").on("click" ,function(){
        console.log("redirecting...");
        window.location.href = "https://en.wikipedia.org/wiki/Special:Random";
    });
});




