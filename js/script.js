$(function(){
	/* gnb menu */
	
	$('.gnb>li').hover(function(){
		$(this).find('.subWrapBg').stop().slideDown();
	},function(){
		$(this).find('.subWrapBg').stop().slideUp();
	}); 
	
	/* gnb scroll*/
	/* $(window).scroll(function(){
		
	}); */
	
	$(window).on('scroll',function(){
	
	
	
			var sct=$(window).scrollTop();
		
		if(sct>=30){
			$('.headerTop').stop().animate({height:0},100);
			$('.gnbWrap').stop().animate({top:0},100);
			$('.subWrapBg').stop().animate({top:'70px'},100);
		}else if(sct<=30){
			$('.headerTop').stop().animate({height:'29px'},200);
			$('.gnbWrap').stop().animate({top:'30px'},200);
			$('.subWrapBg').stop().animate({top:'70px'},200);
		}
		
		console.log(innerWidth);
		
		if(sct > 30 && innerWidth > 750 && innerWidth < 911) {
			
			$('.headerTop').stop().animate({height:0},200);
			$('.gnbWrap').stop().animate({top:0},200);
			$('.subWrapBg').stop().animate({top:'120px'},200);
			
			console.log($('.subWrapBg').top);
			console.log('test1');
			
		} else if(sct <= 30 && innerWidth < 911) {
		
			$('.headerTop').stop().animate({height:0},200);
			$('.gnbWrap').stop().animate({top:0},200);
			$('.subWrapBg').stop().animate({top:'120px'},200);
			
			console.log($('.subWrapBg').top);
			console.log('test2');
		
		}
		});
});