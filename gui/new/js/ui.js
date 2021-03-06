(function($) {
	$(function() {

		// Variables for UI.js
		var dropdown = 'ul.dropdown-menu';
		var liDropdown = 'li.dropdown';
		var linkLocation = 'a.dropdown-link';

		// If the device is a touch screen device
		if(!!('ontouchstart' in window)){
			$(liDropdown).click(function(){
				if ($(this).children(dropdown).is(':visible')) {
					window.location = $(this).children(linkLocation).attr('href');
				}
			})
		}else{ // Else, use hover
			$(liDropdown).hover(function(){
				$(this).toggleClass('open'); // Triggers CSS, so no need to actually add anything else here
			});
			$(liDropdown).click(function(){
				window.location = $(this).children(linkLocation).attr('href');
			});
		}

	});
})(jQuery);
