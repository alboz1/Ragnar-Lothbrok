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

	$('.sons').click(function(){
		var $this = $(this);
		$this.addClass('open').siblings().removeClass('open').find('.about-son').fadeOut();
		$this.find('.about-son').fadeToggle().css('display','flex');
	});


}
