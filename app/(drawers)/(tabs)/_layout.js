import React, { useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import { useAuthStore } from "../../../store/store";
import { Tabs } from "expo-router";
import Tab from "../../../components/Tab";
const TabsLayout = () => {
  const { bgColor } = useAuthStore();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: Platform.OS === "ios" ? 90 : 60,
          backgroundColor: bgColor?.bgColor,
          elevation: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Tab focused={focused} text="Home" icon={"Home"} />
          ),
        }}
      />
      <Tabs.Screen
        name="page1"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Tab focused={focused} text="Cart" icon={"Cart"} />
          ),
        }}
      />
      <Tabs.Screen
        name="page2"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Tab focused={focused} text="Orders" icon={"Orders"} />
          ),
        }}
      />
      <Tabs.Screen
        name="page3"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Tab focused={focused} text="Wallet" icon={"Wallet"} />
          ),
        }}
      />
      <Tabs.Screen
        name="page4"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Tab focused={focused} text="Profile" icon={"Profile"} />
          ),
        }}
      />
    </Tabs>
  );
};
export default TabsLayout;
