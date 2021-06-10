const baseUrl = 'http://127.0.0.1:5500'
// 弹出侧边栏
function openSidebar() {
	$('.page').addClass('side-bar-in')
	$('.page').removeClass('side-bar-out')
}
// 隐藏侧边栏
function closeSidebar() {
	$('.page').addClass('side-bar-out')
	$('.page').removeClass('side-bar-in')
}
// 滑动效果
function slide(locationID) {
	$("html,body").animate({scrollTop:$('#'+locationID).offset().top},1000);
}

// 弹出侧边栏
$('#btn').on('click',openSidebar)
// 隐藏侧边栏
$('.side-bar-close').on('click',closeSidebar)

// 更改语言
$('.lang-zh').on('click',function(){
	window.localStorage.setItem('lang', 'zh')
	changeLang('zh', 'index-title')
})
$('.lang-en').on('click',function(){
	window.localStorage.setItem('lang', 'en')
	changeLang('en', 'index-title')
})
// 跳转功能介绍
$('#toFunctionIntroduction').on('click',function(){
	$('body').width() <= 375 &&	closeSidebar()
	slide("usage-page")
})
// 跳转服务流程
$('#toServiceProcess').on('click',function(){
	$('body').width() <= 375 &&	closeSidebar()
	slide("service-process-page")
})
// 跳转帮助
$('#toHelp').on('click',function(){
	window.location = `${baseUrl}/help.html`
})
// 侧边栏滚动穿透
$('.side-bar')[0].addEventListener('touchmove', function(e) {
	e.preventDefault();
}, false);