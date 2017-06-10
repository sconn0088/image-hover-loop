$(document).ready(function() {
	var myInterval;
	var oldSrc = $('.photo').attr('src');
	var changeImages = ['Image1.jpg', 'Image2.jpg', 'Image3.jpg'];
	$('.photo').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeImages.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeImages[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', oldSrc);
	});
});