fis-zzBase 基于fis3
=======
给大家一个简单的demo

###功能
1. 按需编译相关文件
2. js，css,png压缩
3. less编译
4. 纯html link import的编译（因为浏览器对这支持不好，在fis编译中，获取到link rel="import" href="xxx.html?__inline" 时，直接include后生成新的html）
5. debug 和 online模式

####package.json
fis所依赖的插件

#### build.sh
对fis操作进行了一次包装

