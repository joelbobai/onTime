import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuthStore } from "../store/store";
import Svg, { Path } from "react-native-svg";
const SearchList = ({ name }) => {
  const { colorGray } = useAuthStore();
  return (
    <View style={styles.container}>
      <Text
        style={{
          paddingLeft: 5,
          paddingRight: 5,
          fontFamily: "Poppins-Light",
          color: colorGray?.colorGray,
        }}
      >
        {name}
      </Text>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <Path
          d="M9.16998 14.83L14.83 9.17004"
          stroke={colorGray?.colorGray}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M14.83 14.83L9.16998 9.17004"
          stroke={colorGray?.colorGray}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
          stroke={colorGray?.colorGray}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};

export default SearchList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
});
