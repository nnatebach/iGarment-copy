$(window).bind("scroll", function(){
	if( $(this).scrollTop()+$(this).height() > ($(document).height() - 5)){
		$('.toggle').css('display','none');
		// navInstance.img.url = "/static/images/igarment-logo-sc-small.png"
	} else{
		$('.toggle').css('display','block')
	}
});


function bookToggle(){
	let click = $('.toggle-click');
	let whole = $('.toggle');
	if (click.attr('src') == '/static/images/switch-on.png'){
		click.attr('src','/static/images/switch-off.png');
		whole.css('bottom','0');
	}
	else{
		click.attr('src','/static/images/switch-on.png');
		whole.css('bottom','-280px');
	}
};
