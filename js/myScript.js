document.addEventListener("DOMContentLoaded", function(){
    Typed.new(".element", {
        strings: ["Hello there,","I'm Emmanuel Ndukwe,<br>Am a Creative Front-End Web Developer and a Project Manager, I Care About Your Story.<br>Scroll Down To See My Portfolio.<br>"],
        startDelay: 5000,
        contentType: 'html',
        typeSpeed: 30,
        backDelay: 2000,
        cursorChar: "_"
    });
});


$(document).ready(function() {
	   $(window).scroll(function() {
	       
	       var container = $('#header-banner').outerHeight(true);
//	       console.log(container);
	//this will calculate header's full height, with borders, margins, paddings
	       var scrollVal = $(this).scrollTop();
//	       console.log(scrollVal);
	        if ( scrollVal > container - 50 ) {
	            $('#portfolio').css({'position':'fixed','top' :'51px', 'z-index':'980','text-align': 'center','margin-bottom':'60px'});
	        } else {
	            $('#portfolio').css({'position':'static','top':'0px','text-align': 'left','margin-bottom':'20px', 'z-index':'800'});
	        }
			
			
			
	//this will calculate header's full height, with borders, margins, paddings
	       var contact = $('.portHeight').outerHeight(true);
//	       console.log("contact: ",contact);
	//this will calculate header's full height, with borders, margins, paddings
	       var scrollVal = $(this).scrollTop();
//	       console.log("scroll: ", scrollVal);
	        if ( scrollVal > contact + 390 ) {
	            $('#contact').css({'position':'fixed','top' :'51px', 'z-index':'2000','text-align': 'center','margin-bottom':'60px'});
	        } else {
	            $('#contact').css({'position':'static','top':'0px','text-align': 'left','margin-bottom':'0','z-index':'1011'});
	        }

	        

	       
    });

    $("#myForm").on('submit', function(){
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();


        console.log(name);
        emailjs.send("gmail","myPortfolio",{
            name: name,
            notes: "Check this out!",
            from_name: email,
            to_name: "etechgist@gmail.com",
            message_html: message,
            reply_to: email
        })
            .then(function(response) {
                console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                $('#supportForm').slideUp('fast');
                $("#myAlert").fadeIn(900);
                $('#name').val('');
                $('#email').val('');
                $('#message').val('');
            }, function(err) {
                console.log("FAILED. error=", err);
                $("#myAlert2").fadeIn(900);

            });
        return false;
    });

});







