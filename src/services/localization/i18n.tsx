import i18next from "i18next";

import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./translations/EN/translation";
import translationRS from "./translations/RS/translation";
import translationJP from "./translations/JP/translation";

// "Inline" English and Arabic translations.

// We can localize to any language and any number of languages.

const resources = {
  EN: translationEN,
  RS: translationRS,
  JP: translationJP,
};

i18next

  .use(initReactI18next)
  .use(HttpApi)
  .use(LanguageDetector)

  .init({
    resources,
    lng: "EN",
    ns: [
      "cartPage",
      "footer",
      "homepage",
      "navbar",
      "productPage",
      "wishlist",
      "login",
      "register",
      "userform",
      "account",
      "languageSwitcher",
      "checkout",
    ],

    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ["EN", "JP", "RS"],
    fallbackLng: "EN",
    debug: true,
  });

export default i18next;
