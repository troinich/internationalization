import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
const messages = { 'en': { welcomeMsg: 'Welcome to Your Vue.js App',
name:"Choose your name" }, 'sv': { welcomeMsg: 'Välkommen till ditt Vue.js App',
name:"Välj ditt namn" } };
const i18n = new VueI18n({
    locale: 'sv', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
});

export default i18n;