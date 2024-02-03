import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuthStore } from "../store/store";
const SearchDetails = ({ leftSideText, rightSideText }) => {
  const { colorGray, colorDark, colorSecondary, colorPrimary } = useAuthStore();
  return (
    <View style={styles.container}>
      <View style={[styles.secondContainer]}>
        <View style={styles.detailsContainer}>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              color: colorDark?.colorDark,
            }}
          >
            {leftSideText}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              color: colorDark?.colorDark,
            }}
          >
            {rightSideText}
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: colorGray?.colorGray,
            borderWidth: 0.3,
            width: "100%",
          }}
        />
      </View>
    </View>
  );
};

export default SearchDetails;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  secondContainer: {
    width: "100%",
    height: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  detailsContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
