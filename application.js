for (var i = 0; i < 16 ; i++) {
	for(var x = 0; x < 16; x++){
	$('#pad-container').append('<div class="square"></div>');
	}
	var z=16;
	$('.square').css({'height' : 'calc(500px / '+ z, 'width' : 'calc(500px / '+z});

}