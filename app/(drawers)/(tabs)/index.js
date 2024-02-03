import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Platform } from "react-native";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import { useAuthStore } from "../../../store/store";
import * as SplashScreen from "expo-splash-screen";
import Home from "../../../screens/Home";
SplashScreen.preventAutoHideAsync();
const statusBarHeight =
  Constants.statusBarHeight || (Platform.OS === "ios" ? 20 : 24);

export default function App() {
  const { setPaddingTop, bgColor } = useAuthStore();
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Medium": require("../../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Light": require("../../../assets/fonts/Poppins-Light.ttf"),
    "Poppins-LightItalic": require("../../../assets/fonts/Poppins-LightItalic.ttf"),
    "Poppins-Bold": require("../../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Black": require("../../../assets/fonts/Poppins-Black.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    await setPaddingTop(statusBarHeight);
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View
      style={[
        styles.container,
        { paddingTop: statusBarHeight, backgroundColor: bgColor?.bgColor },
      ]}
      onLayout={onLayoutRootView}
    >
      <StatusBar
        style={bgColor?.bgColor === "#FFFFFF" ? "dark" : "light"}
        backgroundColor={bgColor?.bgColor}
        animated={true}
      />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});
