// 弹出侧边栏
$('#btn').on('click',function(){
	if($('.page').width()>=480) {
		// $('.page').animate({'margin-left': '-390px'},{easing: 'linear'})
		$('.page').addClass('side-bar-in')
		$('.page').removeClass('side-bar-out')

	}else {
		$('.page').animate({'margin-left': '-375px'},{easing: 'linear'})

	}
})
// 隐藏侧边栏
$('.close').on('click',function(){
	// $('.page').animate({'margin-left': '0'},{easing: 'linear'})
	$('.page').addClass('side-bar-out')
	$('.page').removeClass('side-bar-in')
})