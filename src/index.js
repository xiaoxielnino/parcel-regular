import Regular from 'regularjs';
import './Comtainers/User';

var HelloRegular = Regular.extend({
    template: `
      <User></User>
    `,
  });
  
var component = new HelloRegular({
  });
  
component.$inject('#app'); 

if (module.hot) {
  module.hot.dispose(function () {
      // 模块即将被替换时
      // regular 不会自动replace 需要清空
      document.getElementById('app').innerHTML=''
    });
}