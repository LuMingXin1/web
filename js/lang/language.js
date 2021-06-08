function changeLang(lang) {
  $.i18n.properties({
    //加载资浏览器语言对应的资源文件
    name: 'strings', //资源文件名称
    path: 'Languages/', //资源文件路径
    language: lang,
    cache: false,
    mode: 'map', //用Map的方式使用资源文件中的值
    callback: function () {
      //加载成功后设置显示内容  替换文本
      for (let key in $.i18n.map) {
        $('[data-lang="' + key + '"]').text($.i18n.map[key]);
      }
      // 替换图片
      $('.switch').each((_,item)=>{
        $(item).attr('src',$(item).attr(lang))
      })
      // 替换标签页名称
      document.title = $.i18n.map['title'];
    },
  });
}

$(document).ready(function () {
  changeLang('en')
});