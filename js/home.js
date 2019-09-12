$( document ).ready(function() {
	// $(window).scroll(function() {    
	// 	var scroll = $(window).scrollTop();
	// 	 //console.log(scroll);
	// 	if (scroll >= 90) {
	// 		//console.log('a');
	// 		$(".home-navbar").addClass("sticky-top");
	// 	} else {
	// 		//console.log('a');
	// 		$(".home-navbar").removeClass("sticky-top");
	// 	}
	// });

	//* input invalid message custom
    var elements = document.getElementsByTagName("INPUT");
    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function (e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                switch (e.srcElement.id) {
                    case "username":
                        e.target.setCustomValidity("نام کاربری را وارد نمایید");
                        break;
                    case "password":
                        e.target.setCustomValidity("کلمه عبور را وارد نمایید");
                        break;
                }
            }
        };
        elements[i].oninput = function (e) {
            e.target.setCustomValidity("");
        };
	}
	

	// top slider 
	$('.carousel').carousel({
		interval : 5000
	})
});


function ShowPass() {
	var x = document.getElementById("password");
	if (x.type === "password") {
	  x.type = "text";
	} else {
	  x.type = "password";
	}
  }


//** */  scroll to introduce cec 

$('#go').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }


       
});