import React from "react";
import styled from "styled-components/native";

import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import RestaurantInfoCard from "../components/Restaurant-info-card.component";

function RestaurantsScreen() {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantsListContainer>
        <RestaurantInfoCard />
      </RestaurantsListContainer>
    </SafeArea>
  );
}

export default RestaurantsScreen;

const SafeArea = styled(SafeAreaView)`
   flex: 1;
  ${StatusBar.currentHeight && ` margin-top: ${StatusBar.currentHeight}px `} ;
`;
const SearchContainer = styled.View`
  padding : 16px ;
  background-color : green ;
`;

const RestaurantsListContainer = styled.View`
    flex: 1 ;
    padding: 16px ;
    background-color: blue;
`;
