$(function(){
	$(".category").on('click','h3',function(){
		var currentVisable = $(this).siblings('dl').is(':hidden'); 
		if( currentVisable == true ){
			$(this).parents('li').siblings().find('dl').slideUp('slow');  
			$(this).siblings('dl').slideDown('slow'); 
		}else{
			$(this).siblings('dl').slideUp('slow');
		} 
	})

	$(".category").on('click','dd',function(){
		var currentSmallVisable =$(this).siblings('dt').is(':hidden');
		if( currentSmallVisable == true ){ 
			$(this).parents('li').find('dd').siblings().slideUp('slow');  
			$(this).siblings('dt').slideDown('slow'); 
		} 
		else{
			$(this).siblings('dt').slideUp('slow'); 
		} 		 
	})

	// var linkDetail=$('.category dt');
	// linkDetail.on('click',function(){
	// 	$('.current').removeClass('current');
	// 	$(this).addClass('current');
	// });

	// if($('.category dt').hasClass('current')){
	// 	$('.current').show();
	// 	$('.current').siblings().show();
	// 	$('.current').parents('li').children('dl').show();
		
	// }
})