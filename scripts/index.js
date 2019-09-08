$(document).ready(function(){
	var mySwiper = new Swiper ('.swiper-container', {
		autoplay:true,
    	loop:true, // 循环模式选项
    
	    // 如果需要分页器
	    pagination: {
	      el:'.swiper-pagination',
	    },
  	});
	$('.annual-list-ol').on('mouseover','.annual-list-nav',function(){
  		var currentIndex=$(this).index()+1;
  		hideAll();
  		hideAllNav();
		$(this).css('opacity','1');
  		$('.annual-item'+currentIndex).show();
  	});
	function hideAll() {
		for (var i=1;i<11;i++) {
			$('.annual-item'+i).hide();
		}
	};
	function hideAllNav(){
		for(var i=0;i<10;i++){
			$('.annual-list-ol section').eq(i).css('opacity','0.8');
		}
	}
})