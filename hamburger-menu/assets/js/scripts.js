
jQuery(document).ready(function() {

    /*
        Fullscreen Background
    */
	$.backstretch("../assets/img/logo.png");
	
	/*
	    Open / Close Menu 
	*/
	$('.hamburger-button button').on('click', function(){
		$('.top-menu').toggleClass('active');
		$(this).toggleClass('menu-closed');
	});
	
});
