//Webpack的配置文件:本事是一个Node.js模块，给Webpack导出一个选项/配置对象
module.exports = {
    //0：打包模式   
    // mode:'development',  //开发模式,打包时不压缩
    mode:'production',  //产品模式，打包时压缩

    //1：打包入口文件---可以实现"拔出萝卜带出泥"效果的文件,和其他文件有更多的依赖关系
    entry:'./public/src/js/index.js',
    //2：打包输出文件和目录
    output:{
        path:__dirname+'/dist', //输出文件所在目录
        filename:'bundle.js',  //输出文件名
    },
    //3：加载器

    //4：扩展插件
}