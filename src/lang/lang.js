//lang.js
import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './langs/en'
import tw from './langs/zh-TW'
Vue.use(VueI18n)

const locale = localStorage.getItem('locale') || 'en'
const messages = {
    en,
    tw
}
const i18n = new VueI18n({
  locale,
  messages
})
export default i18n