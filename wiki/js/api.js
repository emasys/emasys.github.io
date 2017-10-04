/**
 * Created by EMASYS ND on 7/8/2017.
 */

var endPoint = "https://en.wikipedia.org/w/api.php?callback=?";
$(document).ready(function () {
    $("#search")
        .on("submit", function (e) {
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
                        data
                            .query
                            .pages
                            .forEach(function (response) {
                                var title = response.title,
                                    body = response.extract,
                                    link = response.fullurl
                                // console.log(title);

                                if (body.length > 200) {
                                    $('#display').append("<div class='result'><h4 class='title'>" + title + "</h4><p class='content'>" + body.substring(0, 200) + "... <a href='" + link + "' target= '_blank'><em>learn more</em></a></p></div>");
                                } else {
                                    $('#display').append("<div class='result'><h4 class='title'>" + title + "</h4><p class='content'>" + body + "</p></div>");
                                }
                            })
                    } catch (err) {
                        $('#display').append("<div class='result'><p class='title'> Sorry, your query returned no results.</p>" +
                                "</div>");
                    }
                });
            document
                .activeElement
                .blur(); //hide the keyboard after query
            e.preventDefault();
            // to enable the submit button work

        });
    $("#random").on("click", function () {
        window.location.href = "https://en.wikipedia.org/wiki/Special:Random";
    });

});