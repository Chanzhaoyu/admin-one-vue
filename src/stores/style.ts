import { defineStore } from "pinia";
import * as styles from "@/styles";

export type StyleState = {
  asideStyle: string;
  asideScrollbarsStyle: string;
  asideBrandStyle: string;
  asideMenuItemStyle: string;
  asideMenuItemActiveStyle: string;
  asideMenuDropdownStyle: string;
  navBarItemLabelStyle: string;
  navBarItemLabelHoverStyle: string;
  navBarItemLabelActiveColorStyle: string;
  overlayStyle: string;
  darkMode: boolean;
};

export const useStyleStore = defineStore("style", {
  state: (): StyleState => ({
    /* Styles */
    asideStyle: "",
    asideScrollbarsStyle: "",
    asideBrandStyle: "",
    asideMenuItemStyle: "",
    asideMenuItemActiveStyle: "",
    asideMenuDropdownStyle: "",
    navBarItemLabelStyle: "",
    navBarItemLabelHoverStyle: "",
    navBarItemLabelActiveColorStyle: "",
    overlayStyle: "",

    /* Dark mode */
    darkMode: false,
  }),
  actions: {
    setStyle(payload: string) {
      if (!(styles as any)[payload]) {
        return;
      }

      if (typeof localStorage !== "undefined") {
        localStorage.setItem("style", payload);
      }

      const style = (styles as any)[payload];

      for (const key in style) {
        (this as any)[`${key}Style`] = style[key];
      }
    },

    setDarkMode(payload?: boolean | undefined) {
      this.darkMode = payload ?? !this.darkMode;

      if (typeof localStorage !== "undefined") {
        localStorage.setItem("darkMode", this.darkMode ? "1" : "0");
      }

      if (typeof document !== "undefined") {
        document.body.classList[this.darkMode ? "add" : "remove"](
          "dark-scrollbars"
        );

        document.documentElement.classList[this.darkMode ? "add" : "remove"](
          "dark-scrollbars-compat"
        );
      }
    },
  },
});
