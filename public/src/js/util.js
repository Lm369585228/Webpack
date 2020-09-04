//Webpack打包必须要知道文件之间的依赖关系--用导入/导出 标明

//Webpack可以理解任意一种导出/导入语法

// module.exports = function getCompanyName(){
export default function getCompanyName(){
	return 'TEDU.CN';
}