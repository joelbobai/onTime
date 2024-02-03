import { StyleSheet, Text, View, Button } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView } from "@react-navigation/drawer";

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <Button title="one" />
      <View style={{ width: "100%", backgroundColor: "red" }}>
        <Text>hvhv</Text>
      </View>
    </DrawerContentScrollView>
  );
};
const DrawersLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      />
    </GestureHandlerRootView>
  );
};
export default DrawersLayout;
