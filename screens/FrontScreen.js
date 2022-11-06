import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { Avatar, Card } from "react-native-paper";
import {
  AveriaLibre_700Bold,
  AveriaLibre_700Bold_Italic,
} from "@expo-google-fonts/averia-libre";
import {
  ArchitectsDaughter_400Regular,
  useFonts,
} from "@expo-google-fonts/architects-daughter";
import AppLoading from "expo-app-loading";
import { auth } from "../firebase";
const FrontScreen = ({ navigation }) => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);

  let [fontsLoaded, error] = useFonts({
    ArchitectsDaughter_400Regular,
    AveriaLibre_700Bold,
    AveriaLibre_700Bold_Italic,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <StatusBar color="light-content" />
      <View style={styles.header}>
        {Platform.OS === "ios" ? (
          <Avatar.Image
            backgroundColor={"white"}
            resizeMode={"contain"}
            size={300}
            source={require("../assets/logo12.png")}
          />
        ) : (
          <Animatable.Image
            backgroundColor={"white"}
            animation={"bounceIn"}
            resizeMode="contain"
            source={require("../assets/logo12.png")}
            style={{ width: 300, height: 300, borderRadius: 300 }}
          />
        )}
      </View>
      <Animatable.View animation={"fadeInUpBig"} style={styles.footer}>
        <View style={styles.footerContainer}>
          <Text style={styles.slogan}>Get yourself a yummy dinner</Text>
          <View style={styles.bottomTag}>
            <Text style={styles.tagLine}>SignIn with Account</Text>
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <LinearGradient
              colors={["#35B8B2", "#35B8B2"]}
              style={styles.singIn}
            >
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default FrontScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#35B8B2",
  },
  header: {
    flex: 2,
    backgroundColor: "#35B8B2",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  footerContainer: {
    padding: 20,
    marginTop: 20,
  },
  slogan: {
    color: "#35B8B2",
    fontSize: 22,
    // fontWeight: "bold",
    fontFamily: "AveriaLibre_700Bold",
  },
  tagLine: {
    color: "grey",
    fontSize: 16,
    letterSpacing: 1,
  },
  bottomTag: {
    marginTop: 10,
  },
  button: {
    alignItems: "flex-end",
    marginRight: 30,
  },
  singIn: {
    width: 150,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});
