import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/components/utility/safe-area.component";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

// import { theme } from "./src/infrastructure/theme";
import RestaurantsScreen from "./src/features/restaurants/screen/Restaurants.screen";
import { theme } from "./src/infrastructure/theme";



const Tab = createBottomTabNavigator();

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }


  return (
    <>
       <ThemeProvider theme={theme} >
       <NavigationContainer > 
          <Tab.Navigator
              screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
          
          
          >
                <Tab.Screen  name="restaurants" component={RestaurantsScreen} />
                <Tab.Screen />
                <Tab.Screen />
          </Tab.Navigator>
       </NavigationContainer>
     
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
