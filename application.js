for (var i = 0; i < 16 ; i++) {
	for(var x = 0; x < 16; x++){
	$('#pad-container').append('<div class="square"></div>');
	}
	$('.square').css({'height' : 'calc(500px / 16', 'width' : 'calc(500px / 16'});
}

$('.square').on('mouseenter', function(){
	$(this).css('background-color', 'black');
});

$('.clear').on('click', function(){
	$('.square').css('background-color', 'transparent');
});