import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useAuthStore } from "../store/store";
const SearchNotFound = () => {
  const { colorDark, colorGray, colorSecondary } = useAuthStore();
  return (
    <View style={styles.container}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        id="clipboard"
      >
        <G fill={colorSecondary?.colorSecondary}>
          <Path d="M98.176 81.001c0 1.006.819 1.823 1.824 1.823h43.086c1 0 1.825-.817 1.825-1.823v-1.153a1.835 1.835 0 0 0-1.825-1.828H100a1.831 1.831 0 0 0-1.824 1.828v1.153zM100 69.118h43.086c1 0 1.825-.823 1.825-1.823v-1.157c0-1-.825-1.824-1.825-1.824H100a1.83 1.83 0 0 0-1.824 1.824v1.157c0 .999.82 1.823 1.824 1.823z"></Path>
          <Path d="M156.999 14.894h-24.018c.004.152.021.301.021.453v13.225h19.439a4.567 4.567 0 0 1 4.558 4.558v116.716l-36.472 36.476H47.559a4.571 4.571 0 0 1-4.558-4.558V33.129a4.567 4.567 0 0 1 4.558-4.558h19.444V15.347c0-.152.012-.301.02-.453H43c-7.522 0-13.678 6.156-13.678 13.678v157.75C29.323 193.844 35.479 200 43 200h113.999c7.526 0 13.679-6.156 13.679-13.679V28.572c0-7.523-6.153-13.678-13.679-13.678z"></Path>
          <Path d="M55.624 94.317a1.83 1.83 0 0 0 1.826 1.822h85.637c1 0 1.825-.823 1.825-1.822v-1.159c0-1-.825-1.824-1.825-1.824H57.449a1.832 1.832 0 0 0-1.826 1.824v1.159zM57.449 82.824h28.57a1.828 1.828 0 0 0 1.826-1.823v-28.57a1.828 1.828 0 0 0-1.826-1.824h-28.57a1.828 1.828 0 0 0-1.826 1.824v28.57a1.829 1.829 0 0 0 1.826 1.823zM125.085 149.846a4.553 4.553 0 0 0-3.224 1.338 4.533 4.533 0 0 0-1.334 3.224v25.466l30.027-30.027h-25.469zM55.624 108.022c0 1.004.821 1.821 1.826 1.821h85.637c1 0 1.825-.817 1.825-1.821v-1.15c0-1.009-.825-1.83-1.825-1.83H57.449a1.832 1.832 0 0 0-1.826 1.83v1.15zM143.086 50.607H100a1.826 1.826 0 0 0-1.824 1.824v1.152c0 1.004.819 1.828 1.824 1.828h43.086c1 0 1.825-.823 1.825-1.828v-1.152a1.83 1.83 0 0 0-1.825-1.824zM55.624 121.729a1.83 1.83 0 0 0 1.826 1.825h85.637c1 0 1.825-.821 1.825-1.825v-1.151a1.833 1.833 0 0 0-1.825-1.825H57.449a1.83 1.83 0 0 0-1.826 1.825v1.151zM55.624 135.436c0 1.004.821 1.83 1.826 1.83h40.992a1.834 1.834 0 0 0 1.825-1.83v-1.15a1.833 1.833 0 0 0-1.825-1.826H57.449a1.834 1.834 0 0 0-1.826 1.826v1.15zM73.386 31.761h53.232c.464 0 .927-.181 1.285-.541a1.81 1.81 0 0 0 .54-1.281V15.347a6.39 6.39 0 0 0-1.874-4.511 6.353 6.353 0 0 0-4.511-1.87h-13.095a8.964 8.964 0 1 0-17.926 0H77.944a6.366 6.366 0 0 0-4.515 1.87 6.405 6.405 0 0 0-1.871 4.511V29.94c0 .463.185.927.539 1.281.358.36.821.54 1.289.54zM100 4.79a4.177 4.177 0 1 1 .002 8.354A4.177 4.177 0 0 1 100 4.79z"></Path>
        </G>
      </Svg>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "Poppins-Bold",
          color: colorDark?.colorDark,
        }}
      >
        Not Found
      </Text>
      <Text
        style={{
          paddingLeft: 5,
          paddingRight: 5,
          fontSize: 15,
          fontFamily: "Poppins-Light",
          color: colorGray?.colorGray,
          textAlign: "center",
        }}
      >
        Sorry, the keyword you entered cannot be found, please check again or
        search with another keyword.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    rowGap: 20,
    marginTop: 80,
  },
});

export default SearchNotFound;
