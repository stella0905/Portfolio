import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import tranEn from './files/en.json'
import tranKo from './files/ko.json'

const resources = {
  en: { translation: tranEn },
  ko: { translation: tranKo },
}

const userLanguage = window.navigator.language || window.navigator.language

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || userLanguage || 'ko',
  fallbackLng: 'ko',
  debug: true,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
})

export default i18n

export const languages = ['en', 'ko']

export const language = languages[0]
