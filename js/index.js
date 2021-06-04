// 弹出侧边栏
$('#btn').on('click',function(){
	if($('.page').width()>=480) {
		$('.page').animate({'margin-left': '-390px'})
	}else {
		$('.page').animate({'margin-left': '-375px'})
	}
})
// 隐藏侧边栏
$('.close').on('click',function(){
	$('.page').animate({'margin-left': '0'})
})