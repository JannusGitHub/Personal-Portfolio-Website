$(document).ready(function () {
    //*********** Animated headline js
	$('.selector').animatedHeadline({
		animationType: 'clip'
	});
    


    //********** menu background color change while scroll
	$(window).on('scroll', function () {
		var menu_area = $('.header-area');
		if ($(window).scrollTop() > 100) {
			menu_area.addClass('sticky_navigation');
		} else {
			menu_area.removeClass('sticky_navigation');
		}
	});
})