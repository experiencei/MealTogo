import React, { useState, useContext } from "react";
import { List, Divider } from "react-native-paper";

import { ScrollView } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";


export const RestaurantDetailScreen = ({ navigation, route }) => {
    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);

    <List.Accordion
    title="Breakfast"
    left={(props) => <List.Icon {...props} icon="bread-slice" />}
    expanded={breakfastExpanded}
    onPress={() => setBreakfastExpanded(!breakfastExpanded)}
  >


  </List.Accordion>
}