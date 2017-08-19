(function() {
    emailjs.init("user_vxUe1nZ3FDkXzG5ch4QUF");
})();

// Changing the defaults
window.sr = ScrollReveal({ 
    reset: true 
});

// Customizing a reveal set
sr.reveal('.sectionBox', { 
    duration: 1000,
    delay: 0, 
    mobile: true,

});

sr.reveal('.sectionAbout', { 
    duration: 1000,
    delay: 0, 
    mobile: true,

});

sr.reveal('#contact', { 
    duration: 1000,
    delay: 0, 
    mobile: true,

});

$('.animate, .timeline li, .footerBox').scrolla({
    mobile:true
});
// $('.timeline li').scrolla('bind');


$(document).ready(function(){
    // $('.sectionBox,.sectionAbout, #contact, footer').fadeTo(1000,0.2);
    // $('#one, #two, #three, #four, #five, #six').fadeTo(1000,0.2);

    // $('#oneImg').bind('appear', function(){
    //     $('#one').fadeTo(1000,1).addClass('animated zoomIn');
    // }); $('#twoImg').bind('appear', function(){
    //     $('#two').fadeTo(1000,1).addClass('animated zoomIn');
    // }); $('#threeImg').bind('appear', function(){
    //     $('#three').fadeTo(1000,1).addClass('animated zoomIn');
    // }); $('#fourImg').bind('appear', function(){
    //     $('#four').fadeTo(1000,1).addClass('animated zoomIn');
    // }); $('#fiveImg').bind('appear', function(){
    //     $('#five').fadeTo(1000,1).addClass('animated zoomIn');
    // }); $('#sixImg').bind('appear', function(){
    //     $('#six').fadeTo(1000,1).addClass('animated zoomIn');
    // }).bind('disappear', function(){
    //     $('#one, #two, #three, #four, #five, #six').removeClass('animated zoomIn');
    // });


    // $('.sectionBox').bind('appear', function(){
    //     console.log("worked!");
    //     $('.sectionBox').fadeTo(100,1)
    //        .addClass('animated zoomIn');
    //     // console.log($('#one').is(':visible'));
    // });

    // $('.sectionAbout').bind('appear', function(){
    //     console.log("worked too!");
    //     $('.sectionAbout').fadeTo(100,1).addClass('animated fadeInUp');
    // });

    // $('#contact').bind('appear', function(){
    //     $('#contact').fadeTo(100,1).addClass('animated fadeInUp');
    // });

    // $('footer').bind('appear', function(){
    //     $('footer').fadeIn(2000).addClass('animated fadeInLeft');
    // })

});


$('.navbar-toggler').click(function(){
    $('#hamburg').toggleClass('fa-bars fa-times');
});

$('.navbar-collapse>ul>li>a').click(function() {
    $('#hamburg').removeClass('fa-times').addClass('fa-bars');

});


document.addEventListener("DOMContentLoaded", function(){
    Typed.new(".tt", {
        strings: ["Hello there,","I'm Emmanuel Ndukwe",
            "I'm a freelance front-end<br> web developer",
            "I would like to <br>work with you",
            "It's Nice To Meet You."],
        startDelay: 2000,
        contentType: 'html',
        typeSpeed: 5,
        backDelay: 2000,
        cursorChar: "|"
    });
});

var feedback = '<div class="alert alert-success alert-dismissible fade show" role="alert">'+
    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span>'+
    '</button>'+
    '<strong>Thank you!</strong> Your message has been sent.</div>';

var errorMsg = '<div class="alert alert-danger alert-dismissible fade show" role="alert">'+
    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span>'+
    '</button>'+
    '<strong>Sorry, </strong>something went wrong</div>';

$("#submit").on('click', function(){
    if($('#email').val() !=='' && $('#message').val() !=='') {
        var email = $('#email').val();
        var message = $('#message').val();
        emailjs.send("gmail", "template_NHzH2D6l", {
            notes: "Check this out!",
            from_name: email,
            to_name: "etechgist@gmail.com",
            message_html: message
        })
            .then(function (response) {
                console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                $('#email').val('');
                $('#message').val('');
                $('#err').html(feedback);
            }, function (err) {
                console.log("FAILED. error=", err);
                $('#err').html(errorMsg);
            });
    }else{
        $('#content').html(errorMsg);
    }
//    return false;
});
