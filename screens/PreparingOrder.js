import { StyleSheet, Text, SafeAreaView, View, Animated } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
const PreparingOrder = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 5000);
  }, []);

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/favicon.png")}
        animation={"slideInUp"}
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animated.Text
        animation={"slideInUp"}
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animated.Text>
      <Progress.Circle size={60} indeterminate={true} color={"white"} />
    </SafeAreaView>
  );
};

export default PreparingOrder;

const styles = StyleSheet.create({});
