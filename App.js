import React, { useState, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();
const statusBarHeight =
  Constants.statusBarHeight || (Platform.OS === "ios" ? 20 : 24);
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <View>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "Poppins-Medium",
          }}
        >
          Open up App.js to start working on your app!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: statusBarHeight,
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});
