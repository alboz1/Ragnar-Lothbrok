$(document).ready(function(){
	$(window).scroll(function(){
		$('.arrow').css({'opacity':0,'animation': 'none'});
	});
	$('body').mousemove(function(){
		$('#ragnarSpeach').delay(2000).fadeIn();
	});

	openCloseModal();
	ragnarssons();
});
function openCloseModal(){

	$('#readMore').click(function(){
		$('.modal').fadeIn(300);
		$('body').css('overflow','hidden');
	});

	$('.close').on('click',function(){
		$('.modal').fadeOut(300);
		$('body').css('overflow','auto');
	});
}
function ragnarssons () {
	$('li:last-child').find('.arrow-up .about-son').css('left','-'+ 295+ 'px');

	$('li').click(function() {
		var $this = $(this);
		$this.find('.arrow-up').fadeIn(300);
		$this.siblings().find('.arrow-up').fadeOut(300);
	});


}

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
