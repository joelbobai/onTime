import { StyleSheet, View } from "react-native";
import React from "react";
import { useAuthStore } from "../store/store";
import Search from "../screens/Search";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const search = () => {
  const { paddingTop, bgColor } = useAuthStore();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View
        style={[
          styles.container,
          {
            paddingTop: paddingTop?.paddingTop,
            backgroundColor: bgColor?.bgColor,
          },
        ]}
      >
        <Search />
      </View>
    </GestureHandlerRootView>
  );
};

export default search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});
