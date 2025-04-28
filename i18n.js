import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./src/locales/en/translation.json";
import idTranslation from "./src/locales/en/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    id: { translation: idTranslation },
  },
  lng: "en", // default bahasa
  fallbackLng: "en", // fallback bahasa kalau tidak ditemukan
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false, // untuk menonaktifkan Suspense
  },
});

export default i18n;
