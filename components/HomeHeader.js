import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { useAuthStore } from "../store/store";
import Svg, { Path } from "react-native-svg";
const HomeHeader = () => {
  const { colorGray, colorDark } = useAuthStore();
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View
          style={{
            borderRadius: 25,
            width: 33,
            height: 33,
            marginTop: 5,
          }}
        >
          <ImageBackground
            // source={require("../images/carousel/logo.png")}
            source={{
              uri: `https://ggsc.s3.amazonaws.com/images/uploads/Mother_and_baby_looking_at_each_other.jpg`,
            }}
            imageStyle={{ width: "100%", borderRadius: 25 }}
            style={styles.profile}
          />
        </View>
        <View style={styles.textContainer}>
          <Text
            style={{
              paddingLeft: 5,
              paddingRight: 5,
              fontFamily: "Poppins-Light",
              color: colorGray?.colorGray,
            }}
          >
            Good Morning 👋
          </Text>
          <Text
            style={{
              color: colorDark?.colorDark,
              paddingLeft: 5,
              paddingRight: 5,
              fontFamily: "Poppins-Bold",
            }}
          >
            Joel Isaiah Bobai
          </Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
        >
          <Path
            d="M12 6.43994V9.76994"
            stroke={colorDark?.colorDark}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <Path
            d="M12.02 2C8.34002 2 5.36002 4.98 5.36002 8.66V10.76C5.36002 11.44 5.08002 12.46 4.73002 13.04L3.46002 15.16C2.68002 16.47 3.22002 17.93 4.66002 18.41C9.44002 20 14.61 20 19.39 18.41C20.74 17.96 21.32 16.38 20.59 15.16L19.32 13.04C18.97 12.46 18.69 11.43 18.69 10.76V8.66C18.68 5 15.68 2 12.02 2Z"
            stroke={colorDark?.colorDark}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <Path
            d="M15.33 18.8201C15.33 20.6501 13.83 22.1501 12 22.1501C11.09 22.1501 10.25 21.7701 9.65004 21.1701C9.05004 20.5701 8.67004 19.7301 8.67004 18.8201"
            stroke={colorDark?.colorDark}
            stroke-width="1.5"
            stroke-miterlimit="10"
          />
        </Svg>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
        >
          <Path
            d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
            stroke={colorDark?.colorDark}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 55,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  leftContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    columnGap: 20,
  },
  textContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    rowGap: 2,
  },
  rightContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    //   backgroundColor: "red",
    columnGap: 15,
  },
  profile: {
    width: 45,
    height: 45,
  },
});
