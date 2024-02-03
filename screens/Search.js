import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import React, { useCallback, useRef, useState } from "react";
import SearchHeader from "../components/SearchHeader";
import SearchDetails from "../components/SearchDetails";
import SearchList from "../components/SearchList";
import SearchNotFound from "../components/SearchNotFound";
import BottomSheet from "../components/BottomSheet";
import { useAuthStore } from "../store/store";
import SearchSortAndFilter from "../components/SearchSortAndFilter";
import UberEats from "../components/UberEats";
const Search = () => {
  const { bgColor } = useAuthStore();
  const [shadow, setShadow] = useState(false);
  const { height, width } = useWindowDimensions();
  const ref = useRef();
  const onPressMenu = useCallback(() => {
    const isActive = ref?.current.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
      setShadow(false);
    } else {
      ref?.current?.scrollTo(-200);
      setShadow(true);
    }
  }, []);

  return (
    <>
      <View style={{ height: "100%", height: "100%", position: "relative" }}>
        <SearchHeader menu={onPressMenu} />
        {/* <SearchDetails leftSideText={"Recent"} rightSideText={"Clear All"} /> */}
        <SearchDetails
          leftSideText={'Results for "hjadjadsgj"'}
          rightSideText={"0 Found"}
        />

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <SearchNotFound />
        </ScrollView>
        {shadow && (
          <TouchableOpacity
            onPress={onPressMenu}
            style={[
              styles.shadow,
              {
                height,
                width,
                backgroundColor:
                  bgColor.bgColor === "#FFFFFF"
                    ? "#0c0c0c66"
                    : "rgba(251, 251, 251, 0.10)",
              },
            ]}
          />
        )}
      </View>

      <BottomSheet ref={ref}>
        <SearchSortAndFilter />
        {/* <UberEats /> */}
      </BottomSheet>
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  },
  shadow: {
    flex: 1,
    position: "absolute",
    //  zIndex: 10,
    // backgroundColor: "rgba(255, 255, 255, 0.5)",
    // backgroundColor: "rgba(251, 251, 251, 0.10)",
    // backgroundColor: "#0c0c0c66",
    justifyContent: "center",
  },
});

//     <SearchList name="Iphone 12pro max" />
// <SearchList name="Samsung Galaxy S21" />
// <SearchList name="Google Pixel 6" />
// <SearchList name="OnePlus 9 Pro" />
// <SearchList name="Huawei P40" />
// <SearchList name="Xiaomi Mi 11" />
// <SearchList name="LG V60 ThinQ" />
// <SearchList name="Sony Xperia 5 II" />
// <SearchList name="Motorola Edge+" />
// <SearchList name="Nokia 8.3" />
// <SearchList name="Oppo Find X3 Pro" />
// <SearchList name="Realme GT" />
// <SearchList name="Asus ROG Phone 5" />
// <SearchList name="Lenovo Legion Phone Duel 2" />
// <SearchList name="BlackBerry Key2" />
// <SearchList name="HTC U12+" />
// <SearchList name="ZTE Axon 30 Ultra" />
// <SearchList name="Vivo X60 Pro+" />
// <SearchList name="Pixel 5a" />
// <SearchList name="iPhone SE (2020)" />
// <SearchList name="Samsung Galaxy Note 20 Ultra" />
// <SearchList name="Google Pixel 5" />
// <SearchList name="OnePlus 8T" />
// <SearchList name="Huawei Mate 40 Pro" />
// <SearchList name="Xiaomi Mi 10" />
// <SearchList name="LG Velvet" />
// <SearchList name="Sony Xperia 1 III" />
// <SearchList name="Motorola Razr 5G" />
// <SearchList name="Nokia 5.4" />
// <SearchList name="Oppo Reno 5 Pro+" />
// <SearchList name="Realme 8 Pro" />
// <SearchList name="Asus Zenfone 7 Pro" />
// <SearchList name="Lenovo Moto G Power (2021)" />
// <SearchList name="BlackBerry Evolve X" />
// <SearchList name="HTC Desire 21 Pro 5G" />
// <SearchList name="ZTE Blade 20" />
// <SearchList name="Vivo V21e" />
// <SearchList name="iPhone 11" />
// <SearchList name="Samsung Galaxy S20 FE" />
// <SearchList name="Google Pixel 4a" />
// <SearchList name="OnePlus Nord" />
// <SearchList name="Huawei P30 Pro" />
// <SearchList name="Xiaomi Redmi Note 9" />
// <SearchList name="LG G8 ThinQ" />
// <SearchList name="Sony Xperia 10 III" />
// <SearchList name="Motorola Moto G Power" />
// <SearchList name="Nokia 7.2" />
// <SearchList name="Oppo A74" />
// <SearchList name="Realme C11" />
