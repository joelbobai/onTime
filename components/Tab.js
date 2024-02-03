import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import HouseFill from "../assets/svgs/house-fill.svg";
import HouseLineFill from "../assets/svgs/house-line-fill.svg";
import HouseLineLight from "../assets/svgs/house-line-light.svg";
import HouseLight from "../assets/svgs/house-light.svg";
import HouseLine from "../assets/svgs/house-line.svg";
import React, { useCallback } from "react";
import Wallet from "../assets/svgs/wallet.svg";
import WalletFill from "../assets/svgs/wallet-fill.svg";
import User from "../assets/svgs/user-fill.svg";
import UserFill from "../assets/svgs/user-fill.svg";
import ShoppingCart from "../assets/svgs/shopping-cart.svg";
import ShoppingCartFill from "../assets/svgs/shopping-cart-fill.svg";
import HandBag from "../assets/svgs/handbag.svg";
import HandbagFill from "../assets/svgs/handbag-fill.svg";
import { useAuthStore } from "../store/store";
import Svg, { Path } from "react-native-svg";

const Tab = ({ focused, text, icon }) => {
  const { colorPrimary, colorGray } = useAuthStore();
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  let componentToRender;
  let Hight = "25";
  let Width = "25";
  let notActive = colorGray?.colorGray;
  let active = colorPrimary?.colorPrimary;
  switch (icon) {
    case "Home":
      componentToRender = focused ? (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={Width}
          height={Hight}
          viewBox="0 0 24 24"
          fill="none"
        >
          <Path
            d="M20.0402 6.82165L14.2802 2.79165C12.7102 1.69165 10.3002 1.75165 8.79023 2.92165L3.78023 6.83165C2.78023 7.61165 1.99023 9.21165 1.99023 10.4716V17.3716C1.99023 19.9216 4.06023 22.0016 6.61023 22.0016H17.3902C19.9402 22.0016 22.0102 19.9316 22.0102 17.3816V10.6016C22.0102 9.25165 21.1402 7.59165 20.0402 6.82165ZM12.7502 18.0016C12.7502 18.4116 12.4102 18.7516 12.0002 18.7516C11.5902 18.7516 11.2502 18.4116 11.2502 18.0016V15.0016C11.2502 14.5916 11.5902 14.2516 12.0002 14.2516C12.4102 14.2516 12.7502 14.5916 12.7502 15.0016V18.0016Z"
            fill={active}
          />
        </Svg>
      ) : (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={Width}
          height={Hight}
          viewBox="0 0 24 24"
          fill="none"
        >
          <Path
            d="M9.02 2.84004L3.63 7.04004C2.73 7.74004 2 9.23004 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29004 21.19 7.74004 20.2 7.05004L14.02 2.72004C12.62 1.74004 10.37 1.79004 9.02 2.84004Z"
            stroke={notActive}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M12 17.99V14.99"
            stroke={notActive}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      );
      break;
    case "Cart":
      componentToRender = focused ? (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={Width}
          height={Hight}
          viewBox="0 0 24 24"
          fill="none"
        >
          <Path
            d="M19.9597 8.95844C19.2897 8.21844 18.2797 7.78844 16.8797 7.63844V6.87844C16.8797 5.50844 16.2997 4.18844 15.2797 3.26844C14.2497 2.32844 12.9097 1.88844 11.5197 2.01844C9.12975 2.24844 7.11975 4.55844 7.11975 7.05844V7.63844C5.71975 7.78844 4.70975 8.21844 4.03975 8.95844C3.06975 10.0384 3.09975 11.4784 3.20975 12.4784L3.90975 18.0484C4.11975 19.9984 4.90975 21.9984 9.20975 21.9984H14.7897C19.0897 21.9984 19.8797 19.9984 20.0897 18.0584L20.7897 12.4684C20.8997 11.4784 20.9197 10.0384 19.9597 8.95844ZM11.6597 3.40844C12.6597 3.31844 13.6097 3.62844 14.3497 4.29844C15.0797 4.95844 15.4897 5.89844 15.4897 6.87844V7.57844H8.50975V7.05844C8.50975 5.27844 9.97975 3.56844 11.6597 3.40844ZM8.41975 13.1484H8.40975C7.85975 13.1484 7.40975 12.6984 7.40975 12.1484C7.40975 11.5984 7.85975 11.1484 8.40975 11.1484C8.96975 11.1484 9.41975 11.5984 9.41975 12.1484C9.41975 12.6984 8.96975 13.1484 8.41975 13.1484ZM15.4197 13.1484H15.4097C14.8597 13.1484 14.4097 12.6984 14.4097 12.1484C14.4097 11.5984 14.8597 11.1484 15.4097 11.1484C15.9697 11.1484 16.4197 11.5984 16.4197 12.1484C16.4197 12.6984 15.9697 13.1484 15.4197 13.1484Z"
            fill={active}
          />
        </Svg>
      ) : (
        <Svg
          width={Width}
          height={Hight}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001"
            stroke={notActive}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M8.99999 22H15C19.02 22 19.74 20.39 19.95 18.43L20.7 12.43C20.97 9.99 20.27 8 16 8H7.99999C3.72999 8 3.02999 9.99 3.29999 12.43L4.04999 18.43C4.25999 20.39 4.97999 22 8.99999 22Z"
            stroke={notActive}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M15.4955 12H15.5045"
            stroke={notActive}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M8.49451 12H8.50349"
            stroke={notActive}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      );
      break;
    case "Orders":
      componentToRender = focused ? (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={Width}
          height={Hight}
          viewBox="0 0 24 24"
          fill="none"
        >
          <Path
            d="M16.25 22.5C17.2165 22.5 18 21.7165 18 20.75C18 19.7835 17.2165 19 16.25 19C15.2835 19 14.5 19.7835 14.5 20.75C14.5 21.7165 15.2835 22.5 16.25 22.5Z"
            fill={active}
          />
          <Path
            d="M8.25 22.5C9.2165 22.5 10 21.7165 10 20.75C10 19.7835 9.2165 19 8.25 19C7.2835 19 6.5 19.7835 6.5 20.75C6.5 21.7165 7.2835 22.5 8.25 22.5Z"
            fill={active}
          />
          <Path
            d="M4.84 3.94L4.64 6.39C4.6 6.86 4.97 7.25 5.44 7.25H20.75C21.17 7.25 21.52 6.93 21.55 6.51C21.68 4.74 20.33 3.3 18.56 3.3H6.27C6.17 2.86 5.97 2.44 5.66 2.09C5.16 1.56 4.46 1.25 3.74 1.25H2C1.59 1.25 1.25 1.59 1.25 2C1.25 2.41 1.59 2.75 2 2.75H3.74C4.05 2.75 4.34 2.88 4.55 3.1C4.76 3.33 4.86 3.63 4.84 3.94Z"
            fill={active}
          />
          <Path
            d="M20.5101 8.75H5.17005C4.75005 8.75 4.41005 9.07 4.37005 9.48L4.01005 13.83C3.87005 15.54 5.21005 17 6.92005 17H18.0401C19.5401 17 20.8601 15.77 20.9701 14.27L21.3001 9.6C21.3401 9.14 20.9801 8.75 20.5101 8.75Z"
            fill={active}
          />
        </Svg>
      ) : (
        <Svg
          width={Width}
          height={Hight}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
            stroke={notActive}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
            stroke={notActive}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
            stroke={notActive}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M9 8H21"
            stroke={notActive}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      );
      break;
    case "Wallet":
      componentToRender = focused ? (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={Width}
          height={Hight}
          viewBox="0 0 24 24"
          fill="none"
        >
          <Path
            d="M14.85 3.95078V7.75078H13.35V3.95078C13.35 3.68078 13.11 3.55078 12.95 3.55078C12.9 3.55078 12.85 3.56078 12.8 3.58078L4.87 6.57078C4.34 6.77078 4 7.27078 4 7.84078V8.51078C3.09 9.19078 2.5 10.2808 2.5 11.5108V7.84078C2.5 6.65078 3.23 5.59078 4.34 5.17078L12.28 2.17078C12.5 2.09078 12.73 2.05078 12.95 2.05078C13.95 2.05078 14.85 2.86078 14.85 3.95078Z"
            fill={active}
          />
          <Path
            d="M21.5007 14.5V15.5C21.5007 15.77 21.2907 15.99 21.0107 16H19.5507C19.0207 16 18.5407 15.61 18.5007 15.09C18.4707 14.78 18.5907 14.49 18.7907 14.29C18.9707 14.1 19.2207 14 19.4907 14H21.0007C21.2907 14.01 21.5007 14.23 21.5007 14.5Z"
            fill={active}
          />
          <Path
            d="M19.48 12.95H20.5C21.05 12.95 21.5 12.5 21.5 11.95V11.51C21.5 9.44 19.81 7.75 17.74 7.75H6.26C5.41 7.75 4.63 8.03 4 8.51C3.09 9.19 2.5 10.28 2.5 11.51V18.24C2.5 20.31 4.19 22 6.26 22H17.74C19.81 22 21.5 20.31 21.5 18.24V18.05C21.5 17.5 21.05 17.05 20.5 17.05H19.63C18.67 17.05 17.75 16.46 17.5 15.53C17.29 14.77 17.54 14.04 18.04 13.55C18.41 13.17 18.92 12.95 19.48 12.95ZM14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z"
            fill={active}
          />
        </Svg>
      ) : (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={Width}
          height={Hight}
          viewBox="0 0 24 24"
          fill="none"
        >
          <Path
            d="M13 9H7"
            stroke={notActive}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M22 10.9699V13.03C22 13.58 21.56 14.0299 21 14.0499H19.0399C17.9599 14.0499 16.97 13.2599 16.88 12.1799C16.82 11.5499 17.0599 10.9599 17.4799 10.5499C17.8499 10.1699 18.36 9.94995 18.92 9.94995H21C21.56 9.96995 22 10.4199 22 10.9699Z"
            stroke={notActive}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M17.48 10.55C17.06 10.96 16.82 11.55 16.88 12.18C16.97 13.26 17.96 14.05 19.04 14.05H21V15.5C21 18.5 19 20.5 16 20.5H7C4 20.5 2 18.5 2 15.5V8.5C2 5.78 3.64 3.88 6.19 3.56C6.45 3.52 6.72 3.5 7 3.5H16C16.26 3.5 16.51 3.50999 16.75 3.54999C19.33 3.84999 21 5.76 21 8.5V9.95001H18.92C18.36 9.95001 17.85 10.17 17.48 10.55Z"
            stroke={notActive}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      );
      break;
    case "Profile":
      componentToRender = focused ? (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={Width}
          height={Hight}
          viewBox="0 0 24 24"
          fill="none"
        >
          <Path
            d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
            fill={active}
          />
          <Path
            d="M17.0809 14.1489C14.2909 12.2889 9.74094 12.2889 6.93094 14.1489C5.66094 14.9989 4.96094 16.1489 4.96094 17.3789C4.96094 18.6089 5.66094 19.7489 6.92094 20.5889C8.32094 21.5289 10.1609 21.9989 12.0009 21.9989C13.8409 21.9989 15.6809 21.5289 17.0809 20.5889C18.3409 19.7389 19.0409 18.5989 19.0409 17.3589C19.0309 16.1289 18.3409 14.9889 17.0809 14.1489Z"
            fill={active}
          />
        </Svg>
      ) : (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={Width}
          height={Hight}
          viewBox="0 0 24 24"
          fill="none"
        >
          <Path
            d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
            stroke={notActive}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
            stroke={notActive}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      );
      break;
    default:
      componentToRender = <div>Unknown component type</div>;
  }

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onLayout={onLayoutRootView}
    >
      {componentToRender}
      <Text
        style={{
          color: focused ? colorPrimary?.colorPrimary : colorGray?.colorGray,
          fontSize: 10,
          fontFamily: "Poppins-Medium",
          paddingLeft: 5,
          paddingRight: 5,
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({});
