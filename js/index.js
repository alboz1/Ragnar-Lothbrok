$(window).scroll(function(){

		$('.arrow').css({'opacity':0,'animation': 'none'});
});


$('#readMore').click(function(){
	$('.modal').fadeIn(300);
	$('body').css('overflow','hidden');
});
$('.close').on('click',function(){
	$('.modal').fadeOut(300);
	$('body').css('overflow','auto');
});

/*function playAudio() {
	$('#play').click(function(){

		if ($('#play').hasClass('fa-play')) {
			$(this).addClass('fa-stop').removeClass('fa-play');
			$('#ragnarSpeach').get(0).play();

		}else {
			$(this).removeClass('fa-stop').addClass('fa-play');
			$('#ragnarSpeach').get(0).pause();
		}

	});
}
playAudio();
*/

$('body').mousemove(function(){

			$('#ragnarSpeach').delay(2000).fadeIn();

});
