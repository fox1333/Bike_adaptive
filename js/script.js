$(document).ready(function () {
	$('.icon-menu').click(function (event) {
		$('.icon-menu,.menu_body').toggleClass('active');
		$('body').toggleClass('lock');
	});
	if ($('.slider__body').length > 0) {
		$('.slider__body').slick({
			dots: true,
			arrows: false,
			accessibility: false,
			slidesToshow: 1,
			responsive: [{
				breakpoint: 768,
				settings: {}
			}]
		});
	}
});
function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();