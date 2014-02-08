(function($) {
	$(function() {

		 $('li.dropdown').hover(function(){
		 		$(this).children('ul.dropdown-menu').toggle();
		 });

	});
})(jQuery);
