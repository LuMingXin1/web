$(document).ready(function () {
  changeLang('zh')
});

function changeLang(lang) {
  $.i18n.properties({
    //加载资浏览器语言对应的资源文件
    name: 'strings', //资源文件名称
    path: 'Languages/', //资源文件路径
    language: lang,
    cache: false,
    mode: 'map', //用Map的方式使用资源文件中的值
    callback: function () {
      //加载成功后设置显示内容
      for (let key in $.i18n.map) {
        $('[data-lang="' + key + '"]').text($.i18n.map[key]);
      }
      document.title = $.i18n.map['title'];
    },
  });
}