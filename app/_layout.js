import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { useAuthStore } from "../store/store";

const RootLayout = () => {
  const {
    setBgColor,
    setColorSecondary,
    setColorPrimary,
    setColorGray,
    setColorDark,
  } = useAuthStore();
  useEffect(() => {
    dBlue();
  }, []);
  const lBlue = () => {
    setBgColor("#FFFFFF");
    setColorSecondary("rgba(244, 244, 244, 1)");
    setColorPrimary("rgba(142, 108, 239, 1)");
    setColorGray("rgba(39, 39, 39, 0.5)");
    setColorDark("rgba(39, 39, 39, 1)");
  };

  const dBlue = () => {
    setBgColor("rgba(29, 24, 42, 1)");
    setColorSecondary("rgba(52, 47, 63, 1)");
    setColorPrimary("rgba(142, 108, 239, 1)");
    setColorGray("rgba(255, 255, 255, 0.5)");
    setColorDark("#FFFFFF");
  };
  const dBack = () => {
    setBgColor("#181A20");
    setColorSecondary("#1F222A");
    setColorPrimary("#FFFFFF");
    setColorGray("#9E9E9E");
    setColorDark("#FFFFFF");
  };
  const lBack = () => {
    setBgColor("#FFFFFF");
    setColorSecondary("#FAFAFA");
    setColorPrimary("#101010");
    setColorGray("rgba(0, 0, 0, 0.55)");
    setColorDark("#212121");
  };
  const lYellow = () => {
    setBgColor("#FFFFFF");
    setColorSecondary("rgba(244, 244, 244, 1)");
    setColorPrimary("#EFAE1A");
    setColorGray("#9E9E9E");
    setColorDark("#212121");
  };
  const dYellow = () => {
    setBgColor("#181A20");
    setColorSecondary("#1F222A");
    setColorPrimary("#EFAE1A");
    setColorGray("#9E9E9E");
    setColorDark("#FFFFFF");
  };
  return (
    <Stack>
      <Stack.Screen
        name="(drawers)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="search"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};
export default RootLayout;
