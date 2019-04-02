import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en, ru } from './locales';

const options = {
    interpolation: {
        escapeValue: false,
    },

    debug: true,

    lng: 'ru',

    resources: {
        ru: {
            common: ru.ru,
        },
        en: {
            common: en.en,
        },
    },

    fallbackLng: 'en',

    ns: ['common'],

    defaultNS: 'common',

    react: {
        wait: false,
        bindI18n: 'languageChanged loaded',
        bindStore: 'added removed',
        nsMode: 'default',
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(options);

export default i18n;
