import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useCallback, useEffect, useImperativeHandle } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
const { height: SCREEN_HEIGHT } = Dimensions.get("window");
import { useAuthStore } from "../store/store";
import Animated, {
  Extrapolate,
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

const BottomSheet = React.forwardRef(({ children }, ref) => {
  const { colorDark, colorGray, colorSecondary, colorPrimary, bgColor } =
    useAuthStore();
  const translateY = useSharedValue(0);
  const context = useSharedValue(0);
  const active = useSharedValue(false);
  useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
    scrollTo,
    isActive,
  ]);
  const scrollTo = useCallback((destination) => {
    "worklet";
    // one way
    // if (destination === 0) {
    //   active.value = false;
    // } else {
    //   active.value = true;
    // };
    // another way
    active.value = destination !== 0;
    translateY.value = withSpring(destination, { damping: 50 });
  }, []);
  const isActive = useCallback(() => {
    return active.value;
  }, []);
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 3) {
        scrollTo(0);
      } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
        scrollTo(MAX_TRANSLATE_Y);
      }
    });
  //   useEffect(() => {
  //     scrollTo(-SCREEN_HEIGHT / 3);
  //   }, []);
  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [25, 5],
      Extrapolation.CLAMP
    );
    return {
      borderRadius,
      transform: [{ translateY: translateY.value }],
    };
  });

  //  Extrapolate.CLAMP
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[
          styles.bottomSheetContaniner,
          { backgroundColor: bgColor?.bgColor },
          rBottomSheetStyle,
        ]}
      >
        <View
          style={[
            styles.line,
            { backgroundColor: colorSecondary?.colorSecondary },
          ]}
        />
        {children}
      </Animated.View>
    </GestureDetector>
  );
});

export default BottomSheet;

const styles = StyleSheet.create({
  bottomSheetContaniner: {
    height: SCREEN_HEIGHT,
    width: "100%",
    position: "absolute",
    top: SCREEN_HEIGHT,
    borderRadius: 25,
  },
  line: {
    width: 75,
    height: 4,
    alignSelf: "center",
    marginVertical: 15,
    borderRadius: 2,
  },
});
