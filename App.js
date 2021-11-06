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

const TAB_ICON = {
  Restaurants : "md-restaurants",
  Settings : "md-settings",
  Map : "md-map",
}

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

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon : ({ size , color }) => (
      <Ionicons name={iconName} size={size} color={color}/>
    )
  } 
}
  return (
    <>
       <ThemeProvider theme={theme} >
       <NavigationContainer > 
          <Tab.Navigator
              screenOptions={createScreenOptions}
              
              tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
              }}
          >
                <Tab.Screen  name="Restaurants" component={RestaurantsScreen} />
                <Tab.Screen  name="Settings"/>
                <Tab.Screen name="Map"/>
          </Tab.Navigator>
       </NavigationContainer>
     
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
