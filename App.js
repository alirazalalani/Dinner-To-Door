import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
const Stack = createNativeStackNavigator();
import { store } from "./store";
import { Provider } from "react-redux";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrder from "./screens/PreparingOrder";
import DeliveryScreen from "./screens/DeliveryScreen";
import FrontScreen from "./screens/FrontScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen
              component={FrontScreen}
              name="Front"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              component={LoginScreen}
              name="Login"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              component={SignupScreen}
              name="Signup"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              component={HomeScreen}
              name="Home"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Restaurant"
              component={RestaurantScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Basket"
              component={BasketScreen}
              options={{
                presentation: "modal",
                headerShown: false,
              }}
            />
            <Stack.Screen
              component={PreparingOrder}
              name="PreparingOrder"
              options={{
                headerShown: false,
                presentation: "fullScreenModal",
              }}
            />
            <Stack.Screen
              component={DeliveryScreen}
              name="Delivery"
              options={{
                headerShown: false,
                presentation: "fullScreenModal",
              }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
