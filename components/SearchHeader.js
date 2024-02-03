import {
  StyleSheet,
  View,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
// import { router } from "expo-router";
import { useAuthStore } from "../store/store";
import Svg, { Path } from "react-native-svg";

const SearchHeader = ({ menu = () => {} }) => {
  const { colorGray, colorDark, colorSecondary, colorPrimary } = useAuthStore();
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.secondContainer,
          {
            backgroundColor: colorSecondary?.colorSecondary,
            borderColor: isFocused
              ? colorPrimary?.colorPrimary
              : colorSecondary?.colorSecondary,
          },
        ]}
      >
        <View style={styles.searchContainer}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <Path
              d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
              stroke={isFocused ? colorDark.colorDark : colorGray?.colorGray}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z"
              stroke={isFocused ? colorDark.colorDark : colorGray?.colorGray}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
          <TextInput
            style={{
              flexGrow: 1,
              paddingVertical: 0,
              paddingHorizontal: 15,
              backgroundColor: "transparent",
              maxHeight: 200,
              height: 30,
              // fontSize: 50,
              minHeight: 24,
              overflow: "hidden",
              borderWidth: 0,
              // outlineWidth: 0,
              color: colorDark?.colorDark,
              fontSize: 15,
              //fontFamily: 'Poppins',
              //  resize: 'none',
            }}
            //   value={text}
            //   onChangeText={handleInputChange}
            // 24
            onFocus={() => {
              setIsFocused(true);
            }}
            placeholder="Search"
            placeholderTextColor={colorGray?.colorGray}
            multiline
          />
        </View>
        <TouchableOpacity onPress={() => menu()}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <Path
              d="M22 17.5H15"
              stroke={colorDark.colorDark}
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M5 17.5H2"
              stroke={colorDark.colorDark}
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M22 6.5H19"
              stroke={colorDark.colorDark}
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M9 6.5H2"
              stroke={colorDark.colorDark}
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M7 14.5H13C14.1 14.5 15 15 15 16.5V18.5C15 20 14.1 20.5 13 20.5H7C5.9 20.5 5 20 5 18.5V16.5C5 15 5.9 14.5 7 14.5Z"
              stroke={colorDark.colorDark}
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M11 3.5H17C18.1 3.5 19 4 19 5.5V7.5C19 9 18.1 9.5 17 9.5H11C9.9 9.5 9 9 9 7.5V5.5C9 4 9.9 3.5 11 3.5Z"
              stroke={colorDark.colorDark}
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  secondContainer: {
    // backgroundColor: "red",
    width: "100%",
    height: "70%",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 11 },
    shadowOpacity: 1, // Opacity for shadow is between 0 and 1
    elevation: 3, // for Android shadow
  },
  searchContainer: {
    flexGrow: 1,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    overflow: "hidden",
  },
});
