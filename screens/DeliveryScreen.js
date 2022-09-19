import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
} from "react-native";
import * as Progress from "react-native-progress";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { selectRestaurant } from "../features/restaurantSlice";
import { XIcon } from "react-native-heroicons/outline";
import MapView, { Marker } from "react-native-maps";
import { PhoneIcon } from "react-native-heroicons/solid";
const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XIcon color={"white"} size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md ">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>
      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{
            uri: "https://scontent.fhdd2-1.fna.fbcdn.net/v/t1.6435-9/137326349_1139530766518949_7766835192432196362_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFa1VrLAqnv9HjeQwg-f3Xub18lySrEOFxvXyXJKsQ4XIJI5JOCvaz8OpRn4Chr-kGWvgNTMwgwmdqHKWUOMMQi&_nc_ohc=w8TA_FXVgYkAX84WjHN&_nc_ht=scontent.fhdd2-1.fna&oh=00_AT8Ajff2XbwjbXznUb5CRxrSSJIxp6WwH4oILxPc_vXQGg&oe=63267FD0",
          }}
          className="h-12 w-12 bg-gray-300 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg font-bold">Aliraza Lalani</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <View className="mr-5">
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${+923351293619}`)}
          >
            <PhoneIcon color={"#00CCBB"} size={25} />
          </TouchableOpacity>
          {/* <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text> */}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;

const styles = StyleSheet.create({});
