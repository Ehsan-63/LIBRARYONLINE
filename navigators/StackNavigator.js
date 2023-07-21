import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import BookDetails from "../Components/Home/BookDetails";
import BookSlider from "./../Components/Home/FirstBookSlider";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Authentication">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={TabNavigator} // use the TabNavigator as the component
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Bookslider"
        component={BookSlider}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="BookDetails"
        component={BookDetails}
        options={{ headerShown: true }}
      />

    </Stack.Navigator>
  );
};

export default StackNavigator;
