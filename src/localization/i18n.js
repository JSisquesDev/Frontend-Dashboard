import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en';
import es from './es';
const resources = {
  // list of languages
  en: {
    translations: en,
  },
  es: {
    translations: es,
  },
};
i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: true,
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    compatibilityJSON: 'v3', //To make it work for Android devices, add this line.
    resources,
    lng: 'es', // default language to use.
    // if you're using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
