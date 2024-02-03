import { StyleSheet, Text, View, Button } from "react-native";
import ArrowLeftFill from "../assets/svgs/arrow-left-fill.svg";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import HomeHeader from "../components/HomeHeader";
import HomeSearch from "../components/HomeSearch";
//  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
//fontFamily: "Poppins-Medium",
const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{ height: "100%", height: "100%" }}>
      <HomeHeader />
      <HomeSearch />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
