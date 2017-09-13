$(document)
    .ready(function () {
        $('#submit')
            .on('mouseenter', function () {
                $(this).text('good');
            })
    });

console.log("working");