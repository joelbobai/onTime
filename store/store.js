import { create } from "zustand";

const Theme = {
  lightColorLightness: "15%",
  whiteColorLightness: "20%",
  darkColorLightness: "95%",
  primaryColorHue: "252",
};

// yellow
// yellowPrimaryColor: "#EFAE1A",
// yellowSecondaryColor: "#F8F8F8",
//  yellowGrayColor: "rgba(0, 0, 0, 0.55)",
// Blue
// L=Primary=rgba(142, 108, 239, 1); D=Primary=rgba(29, 24, 42, 1);
// L=Secondary=rgba(244, 244, 244, 1); D=Secondary=rgba(52, 47, 63, 1);
// L=Gray=rgba(39, 39, 39, 0.5); D=Gray=rgba(255, 255, 255, 0.5);
// L=Dark=rgba(39, 39, 39, 1); D=Dark=#FFFFFF;
// Blue
// L=Primary=#101010; D=Primary=#FFFFFF; bg=#181A20
// L=Secondary=#FAFAFA; D=Secondary=#1F222A;
// L=Gray=#9E9E9E; D=Gray=#9E9E9E;
// L=Dark=#212121; D=Dark=#FFFFFF;

export const useAuthStore = create((set) => ({
  paddingTop: "",
  colorDark: "",
  //   colorWhite: `hsl(${Theme.primaryColorHue}, 30%, ${Theme.whiteColorLightness})`,
  //   colorLight: `hsl(${Theme.primaryColorHue}, 30%, ${Theme.lightColorLightness})`,
  colorGray: "",
  colorPrimary: "",
  colorSecondary: "",
  colorSuccess: "hsl(120, 95%, 65%)",
  colorDanger: "hsl(0, 95%, 65%)",
  bgColor: "",
  setBgColor: (str) =>
    set((state) => ({
      bgColor: { ...state.bgcolor, bgColor: str },
    })),
  setPaddingTop: (num) =>
    set((state) => ({
      paddingTop: { ...state.paddingTop, paddingTop: num },
    })),
  setColorSecondary: (str) =>
    set((state) => ({
      colorSecondary: { ...state.colorSecondary, colorSecondary: str },
    })),
  setColorPrimary: (str) =>
    set((state) => ({
      colorPrimary: { ...state.colorPrimary, colorPrimary: str },
    })),
  setColorGray: (str) =>
    set((state) => ({ colorGray: { ...state.colorGray, colorGray: str } })),
  setColorDark: (str) =>
    set((state) => ({ colorDark: { ...state.colorDark, colorDark: str } })),
  // colorBlack: `hsl(${Theme.primaryColorHue}, 30%, 10%)`,
  //   setLightColorLightness: (num) =>
  //     set((state) => ({ Theme: { ...state.Theme, lightColorLightness: num } })),
}));
