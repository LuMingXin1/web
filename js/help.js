// const baseUrl = 'http://127.0.0.1:5500'
// 弹出侧边栏
function openSidebar() {
	$('.help-page').addClass('side-bar-in')
	$('.help-page').removeClass('side-bar-out')
}
// 隐藏侧边栏
function closeSidebar() {
	$('.help-page').addClass('side-bar-out')
	$('.help-page').removeClass('side-bar-in')
}
// 滑动效果
function slide(locationID) {
	$("html,body").animate({scrollTop:$('#'+locationID).offset().top},800);
}

// 弹出侧边栏
$('#btn').on('click',openSidebar)
// 隐藏侧边栏
$('.side-bar-close').on('click',closeSidebar)

// 跳转功能介绍
// $('#toFunctionIntroduction').on('click',function(){
// 	window.location = `${baseUrl}/index.html#usage-page`
// })
// 跳转服务流程
// $('#toServiceProcess').on('click',function(){
// 	window.location = `${baseUrl}/index.html#service-process-page`
// })
// 更改语言
$('.lang-zh').on('click',function(){
	window.localStorage.setItem('lang', 'zh')
	changeLang('zh', 'help-title')
})
$('.lang-en').on('click',function(){
	window.localStorage.setItem('lang', 'en')
	changeLang('en', 'help-title')
})

// 点击切换
$('.help-left-side-bar').on('click',function(e) {
	if(e.target.tagName !== 'LI') return
	// 设置高亮
	$('.help-option').removeClass('active')
	$(e.target).addClass('active')
	// 显示点击的帮助项
	const location = $(e.target).attr('location')
	slide(location)
})