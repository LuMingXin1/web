// 弹出侧边栏
$('#btn').on('click',function(){
	$('.page').addClass('side-bar-in')
	$('.page').removeClass('side-bar-out')
})
// 隐藏侧边栏
$('.side-bar-close').on('click',function(){
	$('.page').addClass('side-bar-out')
	$('.page').removeClass('side-bar-in')
})
// 更改语言
$('.lang-zh').on('click',function(){
	changeLang('zh')
})
$('.lang-en').on('click',function(){
	changeLang('en')
})
// 跳转功能介绍
$('#toFunctionIntroduction').on('click',function(){
	
})