
$(document).ready(function() {
	   $(window).scroll(function() {
	       
	       var container = $('#header-banner').outerHeight(true);
	       console.log(container);
	//this will calculate header's full height, with borders, margins, paddings
	       var scrollVal = $(this).scrollTop();
	       console.log(scrollVal);
	        if ( scrollVal > container - 50 ) {
	            $('#portfolio').css({'position':'fixed','top' :'51px', 'z-index':'980','text-align': 'center','margin-bottom':'60px'});
	        } else {
	            $('#portfolio').css({'position':'static','top':'0px','text-align': 'left','margin-bottom':'20px', 'z-index':'800'});
	        }
			
			
			
	//this will calculate header's full height, with borders, margins, paddings
	       var contact = $('.portHeight').outerHeight(true);
	       console.log("contact: ",contact);
	//this will calculate header's full height, with borders, margins, paddings
	       var scrollVal = $(this).scrollTop();
	       console.log("scroll: ", scrollVal);
	        if ( scrollVal > contact + 390 ) {
	            $('#contact').css({'position':'fixed','top' :'51px', 'z-index':'2000','text-align': 'center','margin-bottom':'60px'});
	        } else {
	            $('#contact').css({'position':'static','top':'0px','text-align': 'left','margin-bottom':'0','z-index':'1011'});
	        }

	        

	       
    });
 });







/*$('document').ready(function(){
    
    $('#portfolio').affix({
      offset: {
          top: 450
//        top: $('#header').height()
      }
});	
    
    $('#contact').affix({
      offset: {
          top: 1500
//        top: $('#header').height()
      }
});	

$('#sidebar').affix({
      offset: {
        top: 200
      }
});	
    
    $('#characterLeft').text('140 characters left');
    $('#message').keydown(function () {
        var max = 140;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('You have reached the limit');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');            
        } 
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' characters left');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');            
        }
    });
    
})
//
//$(function(){
//		$(".element").typed({
//			strings: ["First sentence.", "Second sentence."],
//			typeSpeed: 30,
////            startDelay: 10000,
//		});
//	});
*/