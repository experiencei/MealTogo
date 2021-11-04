/* eslint-disable prettier/prettier */
import React from "react";
import { Text } from "react-native";

function RestaurantInfo({restaurant}) {
    const {
        name ,
        icon ,
        photos ,
        address ,
        openingHours ,
        isClosedTemporarily
    } = restaurant;
    return (
        <Text> RestaurantInfo </Text>
    );
}

export default RestaurantInfo;
