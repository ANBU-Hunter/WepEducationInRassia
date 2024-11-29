import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// كائن الترجمة لكل لغة
const resources = {
  ar: {
    translation: {
      welcome: "مرحبًا بك في موقعنا",
      switch_language: "تبديل اللغة",
      services: "الخدمات",
      contact: "تواصل معنا",
    },
  },
  ru: {
    translation: {
      welcome: "Добро пожаловать на наш сайт",
      switch_language: "Сменить язык",
      services: "Услуги",
      contact: "Свяжитесь с нами",
    },
  },
};

// تهيئة i18next
i18n.use(initReactI18next).init({
  resources,
  lng: "ar", // اللغة الافتراضية
  fallbackLng: "ar", // اللغة الاحتياطية
  interpolation: {
    escapeValue: false, // منع الهروب من النصوص
  },
});

export default i18n;
