jQuery.fn.imageAltAdder = function() { 
    var alt = this.attr('alt');
	return this.after('<div class="image-alt">'+alt+'</div>');
}; 
