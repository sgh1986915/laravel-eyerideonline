$(function(){

	// Instantiate MixItUp:

	//$('.container-products').mixItUp();

	$('#mixContainer').mixItUp({
	    animation: {
	        animateResizeContainer: false,
	    }
	});

	$('#mixContainer').on('mixStart', function(e, state) {
		location.hash = '';
	});

	$('#mixContainer').on('mixEnd', function(e, state) {
		var hash = location.hash.replace('#', '');

        if (hash != '') {
            $('html, body').animate({ 
            	scrollTop: $('#'+hash).offset().top-180
            }, 
            500, 
        	function() {
				$('.float-menu-products').find('li.active').removeClass('active');
			});
        } else {
        	$('html, body').animate({ 
        		scrollTop: 300 
        	}, 
        	200, 
        	function() {
				$('.float-menu-products').find('li.active').removeClass('active');
			});
        }
	});

});