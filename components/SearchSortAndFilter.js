import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useEffect, useState, useMemo } from "react";
import { useAuthStore } from "../store/store";
import ListBtn from "./ListBtn";
import { FlatList } from "react-native-gesture-handler";
function generateFakeData() {
  const randomUUID = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  };

  const animalsCrocodilia = ["All", "Clothes", "Electronics", "Shoes"];

  const fakeDataArray = [];
  for (let i = 0; i < 15; i++) {
    const randomAnimal =
      animalsCrocodilia[Math.floor(Math.random() * animalsCrocodilia.length)];

    const fakeData = {
      job: randomAnimal,
      key: randomUUID(),
    };

    fakeDataArray.push(fakeData);
  }

  return fakeDataArray;
}

const SearchSortAndFilter = () => {
  const generatedDataArray = useMemo(() => generateFakeData(), []);
  const ref = useRef(null);
  const { colorDark, colorGray, colorSecondary } = useAuthStore();
  const [index, setIndex] = useState(0);
  const [viewPosition, setViewPosition] = useState(8);

  console.log(JSON.stringify(generatedDataArray, null, 2));

  // useEffect(() => {
  //   ref.current?.scrollToIndex({
  //     index,
  //     animated: true,
  //     viewOffset: 10,
  //      viewPosition,
  //   });
  // }, [index]);

  const getItemLayout = (data, index) => ({
    length: 30,
    offset: 10,
    index,
  });
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.titleContainer}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Poppins-Bold",
            color: colorDark?.colorDark,
          }}
        >
          Sort & Filter
        </Text>
        <View
          style={{
            borderBottomColor: colorGray?.colorGray,
            borderWidth: 0.3,
            width: "100%",
          }}
        />
      </View>
      <View style={[styles.categoriesContainer]}>
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            paddingLeft: 20,
            color: colorDark?.colorDark,
          }}
        >
          Categories
        </Text>
        <FlatList
          style={{ flexGrow: 0 }}
          ref={ref}
          initialScrollIndex={index}
          data={generatedDataArray}
          keyExtractor={(item) => item.key}
          contentContainerStyle={{ paddingLeft: 20 }}
          showsHorizontalScrollIndicator={false}
          getItemLayout={getItemLayout}
          horizontal
          renderItem={({ item, index: fIndex }) => {
            return (
              <ListBtn
                name={item.job}
                index={index}
                fIndex={fIndex}
                setIndex={setIndex}
                setViewPosition={setViewPosition}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default SearchSortAndFilter;

const styles = StyleSheet.create({
  titleContainer: {
    width: "100%",
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  categoriesContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    rowGap: 15,
  },
});
