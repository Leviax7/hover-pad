var padsize = 16;
createPad(padsize);

function draw(){
	$('.square').on('mouseenter', function(){
		$(this).css('background-color', 'black');
	});
}

function createPad(n){
	for (var i = 0; i < n ; i++) {
		for(var x = 0; x < n; x++){
			$('#pad-container').append('<div class="square"></div>');
		}
		$('.square').css({'height' : 'calc(500px / ' + n, 'width' : 'calc(500px / ' + n});
	}
}
draw();

$('.pad-size').on('click', function(){
	var padsize = prompt("Please enter a new pad size between 2 and 64");
	$('.square').remove();
	createPad(padsize);
	draw();

});
$('.clear').on('click', function(){
	$('.square').css('background-color', 'transparent');
});

$('.button').mouseup(function(){ 
	this.blur();
});