// 弹出侧边栏
$('#btn').on('click',function(){
	$('.page').addClass('side-bar-in')
	$('.page').removeClass('side-bar-out')
})
// 隐藏侧边栏
$('.close').on('click',function(){
	$('.page').addClass('side-bar-out')
	$('.page').removeClass('side-bar-in')
})