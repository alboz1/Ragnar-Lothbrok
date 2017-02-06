$(document).ready(function(){
	$(window).scroll(function(){
		$('.arrow').css({'opacity':0,'animation': 'none'});
	});
	$('body').mousemove(function(){
		$('#ragnarSpeach').delay(2000).fadeIn();
	});

	openCloseModal();
	ragnarssons();
	for (var i = 0; i <= 10; i++){
		imageGallery(i,i,i);
	}
});


function openCloseModal(){

	$('#readMore').click(function(){
		$('.modal').fadeIn(300);
		$('body').css('overflow','hidden');
	});

	$('.close, .modal').on('click',function(){
		$('.modal').fadeOut(300);
		$('body').css('overflow','auto');
	});
}
function ragnarssons () {

	$('.sons').click(function(){
		var $this = $(this);
		$this.addClass('open').siblings().removeClass('open').find('.about-son').fadeOut(200);
		$this.find('.about-son').delay(600).fadeToggle();
	});
}

function imageGallery(imgNr,index,bg) {
	var gallery = $('.image-gallery .wrapper');
	var $this = $(this);

	for (var i = 0; i <= imgNr; i++){
		gallery.append('<div class="box"></div>')[i];
		break;
	}

	$('.box').eq(index).css({'background':'url(../images/gallery/'+bg+'.jpg)center',
														'backgroundSize':'cover'
													});
}
