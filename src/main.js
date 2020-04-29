import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber';

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber);
Vue.directive("border", {
  bind(el, binding, vnode) {
    // ディレクティブが初めて対象のデータに紐付いた時
  },
  inserted(el, binding, vnode) {
    // 親Nodeに挿入された時
  },
  update(el, binding, vnode, oldVnode) {
    // コンポーネントが変更される度。子コンポーネントが更新される時
  },
  componentUpdated(el, binding, vnode, oldVnode) {
    // コンポーネントが更新される度。子コンポーネントが更新された時
  },
  unbinde(el, binding, vnode) {
    // ディレクティブが紐付いている要素から取り除かれた時
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app')
