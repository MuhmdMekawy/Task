// src/i18n.js
import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import ar from '../locales/ar.json';

const i18n = createI18n({
  locale: window.sessionStorage.getItem('app_lang'), // default locale
  fallbackLocale: 'ar', // fallback locale in case the chosen locale isn't available
  messages: {
    en,
    ar,
  },
});

export default i18n;
