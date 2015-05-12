$( document ).ready(function() {
	$('.accordion-header').click(function() {
		$('.accordion-content').css('display','none')
		$(this).next().css('display','block');
	});
	
	$("img.alt").imageAltAdder();
	
	$('.image-link').magnificPopup({type:'image'});
	
});