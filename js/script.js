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