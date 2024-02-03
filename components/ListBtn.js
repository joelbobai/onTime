import { Text, View, TouchableOpacity } from "react-native";
import { useAuthStore } from "../store/store";
import React from "react";

const ListBtn = ({ name, index, fIndex, setIndex, setViewPosition }) => {
  const { colorDark, colorGray, colorSecondary, colorPrimary } = useAuthStore();
  return (
    <TouchableOpacity
      onPress={() => {
        setViewPosition(fIndex);
        setIndex(fIndex);
      }}
    >
      <View
        style={{
          marginRight: 15,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 8,
          paddingBottom: 8,
          borderWidth: 2,
          borderColor: colorPrimary?.colorPrimary,
          borderRadius: 50,
          backgroundColor:
            fIndex === index
              ? colorPrimary?.colorPrimary
              : colorSecondary?.colorSecondary,
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            color: colorDark?.colorDark,
          }}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListBtn;
