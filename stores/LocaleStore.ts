const { locale } = useI18n(); //FIXME: Must be called at the top of a `setup` function (https://stackoverflow.com/questions/72651884/vue-3-usei18n-uncaught-syntaxerror-must-be-called-at-the-top-of-a-setup-f)
import { defineStore } from "pinia";
//defined local store

export const useLocaleStore = defineStore({
  id: "local",
  state: () => ({
    locale: locale.value,
  }),
  actions: {
    setLocale(locale: string) {
      this.locale = locale;
      localStorage.setItem("locale", locale);
    },
    getlocale() {
      return localStorage.getItem("locale") || navigator.language || "en";
    },
  },
});
