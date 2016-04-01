/*
 * author huangzongzhe hzz780@qq.com
 * Richard Huang
 */

// 按需打包
fis.set('project.files', [
    'page/**',
    'lib/**',
    'static/**'
]);

fis.match('*', {
  useHash: false
});


fis.match('*.less', {
  // fis-parser-less 插件进行解析
  parser: fis.plugin('less'),
  // .less 文件后缀构建后被改成 .css 文件
  rExt: '.css',
  useHash: true
});

// 加 md5
fis.match('*.{js,css,png}', {
  useHash: true
});

fis.match('*.js', {
  // fis-optimizer-uglify-js 插件进行压缩
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩
  optimizer: fis.plugin('png-compressor')
});
// debug时，不要压缩使用，执行fis release debug
fis.media('debug').match('*.{js,less,css,png}', {
  useHash: false,
  useSprite: false,
  optimizer: null
  ,domain: 'https://localhost/demos/fis3-zzBase/build'
})
fis.media('online').match('*.{js,less,css,png}', {
  domain: 'your domain'
})