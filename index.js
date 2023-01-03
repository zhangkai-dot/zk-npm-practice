import Main from "./src/components/Main";
import _Vue from "vue";
// 这一步判断window.Vue是否存在，因为直接引用vue.min.js， 它会把Vue绑到Window上，我们直接引用打包好的js才能正常跑起来。
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component("zk-npm-practice", Main);
}

Main.install = Vue => {
  if (!Vue) {
    window.Vue = Vue = _Vue;
  }
  Vue.component(Main.name, Main);
};
export default Main;
