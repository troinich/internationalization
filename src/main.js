import Vue from 'vue'
import App from './App.vue'
import i18n from '@/plugins/i18n';
import FlagIcon from 'vue-flag-icon';
import vuetify from './plugins/vuetify';

Vue.use(FlagIcon);

Vue.config.productionTip = false

new Vue({
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')

