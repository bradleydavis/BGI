$(document).ready(function(){

$('.slick').slick({
	dots: true,
	infinite: false,
	speed: 300,
	autoplay: true,
	autoplaySpeed: 4000,
	slidesToShow: 5,
	slidesToScroll: 1,
	infinite: true,
	dots: true,
	responsive: [
		{
			breakpoint: 2200,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 1800,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 1100,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}
	// You can unslick at a given breakpoint now by adding:
	// settings: "unslick"
	// instead of a settings object
	]
});


	$(".ham-nav-wrap").click(function () {
		if ($("body").hasClass('open-right') === true) { 
			$("body").removeClass('open-right');
			$(".side-nav").removeClass('open-right');
			$(".side-nav").removeClass('slideInLeft');
			$(".ham-nav-wrap").delay(4000).removeClass('close-hamnav');
		} else { 
			$("body").addClass('open-right');
			$(".side-nav").addClass('open-right');
			$(".side-nav").addClass('slideInLeft');
			$(".ham-nav-wrap").delay(4000).addClass('close-hamnav');
		}
	});

	$(".nav-link, #fixed-nav .scroll-top").click(function(){
		var navId = $(this).attr("href");
		$("body, html").animate({scrollTop: $(navId).offset().top}, 400);
		return false;
	});

	(function($) {                           
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 650) {
                $('#fixed-nav').fadeIn(500);
            } else {
                $('#fixed-nav').fadeOut(500);
            }
        });
	})(jQuery);

	$('.closeStaff').click(function() {
	    if($('.staffOverlay').hasClass('on') === true) {       
	      $('.staffOverlay').removeClass('on');
	      $('.body').removeClass('bodyFixed');
	    }
	    else{
	      $('.staffOverlay').addClass('on');
	      $('.body').addClass('bodyFixed');
	    }
	});

	// $('#programmes .slick-slide, .closeDownload').click(function() {
	$('.closeProgramme').click(function() {	
	    if($('.programmeOverlay').hasClass('on') === true) {       
	      $('.programmeOverlay').removeClass('on');
	      $('.body').removeClass('bodyFixed');
	    }
	    else{
	      $('.programmeOverlay').addClass('on');
	      $('.body').addClass('bodyFixed');
	    }
	});




});


// This function calls a rails controller endpoint and initialises the data for the programme 
function setProgramme(id) {
	$.ajax({        
	        type: "GET",
	        url: "/people/" + id + ".json",
	        data: null,
	        cache: false,
	        success: function(response)
	        {
	            $("#programme-title").html(response["title"]);	            
	            $("#programme-subtitle").html(sanitizeHTML(response["subtitle"]));
	            $("#programme-body").html(response["body"]);
	            $("#programme-contact").attr("href", sanitizeHTML(response["contact"]));
	            $("#programme-contact").html("Contact " + response["title"]);
	            $("#programme-avtar").attr("src", response["avtar"]);
	            $("#programme-images").html(response["images"])
	        }
	    });

	  if($('.programmeOverlay').hasClass('on') === true) {
	  	console.log("TRUE");    
	    $('.programmeOverlay').removeClass('on');
	    $('.body').removeClass('bodyFixed');
	  }
	  else{
	  	console.log("FALSE");
	    $('.programmeOverlay').addClass('on');
	    $('.body').addClass('bodyFixed');
	  }
};

// This function calls a rails controller endpoint and initialises the data for the person 
function setPerson(id) {

	$.ajax({        
	        type: "GET",
	        url: "/people/" + id + ".json",
	        data: null,
	        cache: false,
	        success: function(response)
	        {
	            $("#person-title").html(response["title"]);	            
	            $("#person-subtitle").html(sanitizeHTML(response["subtitle"]));
	            $("#person-body").html(response["body"]);
	            $("#person-contact").attr("href", "mailto:" + sanitizeHTML(response["contact"]));
	            $("#person-contact").html("Contact " + response["title"]);
	            $("#person-avtar").attr("src", response["avtar"]);
	        }
	    });

	  if($('.staffOverlay').hasClass('on') === true) {       
	    $('.staffOverlay').removeClass('on');
	    $('.body').removeClass('bodyFixed');
	  }
	  else{
	    $('.staffOverlay').addClass('on');
	    $('.body').addClass('bodyFixed');
	  }	
};

function sanitizeHTML(input) {
	var output = input.replace(/<script[^>]*?>.*?<\/script>/gi, '').
				 replace(/<[\/\!]*?[^<>]*?>/gi, '').
				 replace(/<style[^>]*?>.*?<\/style>/gi, '').
				 replace(/<![\s\S]*?--[ \t\n\r]*>/gi, '');
  return output;
}
