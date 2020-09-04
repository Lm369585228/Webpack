//导入另一个js模块(使用的ES6模块规范)
import getCompanyName from './util'


function createDiv() {
  var div = document.createElement('div');
  div.classList.add('hello');
  div.innerHTML = '版权所有：'+getCompanyName();
  return div;
}
document.body.appendChild(createDiv());
