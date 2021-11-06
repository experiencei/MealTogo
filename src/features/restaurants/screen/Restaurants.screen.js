import React, { useContext } from "react";
import styled from "styled-components/native";

import { Searchbar } from "react-native-paper";
import {  FlatList } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import RestaurantInfoCard from "../components/Restaurant-info-card.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

function RestaurantsScreen() {
  const restaurantContext = useContext(RestaurantsContext)
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <FlatList 
          data={restaurantContext.restaurant}
          renderItem={() => <RestaurantInfoCard /> }
          keyExtractor={(item) => item.name}
          contentContainerStyle={{padding: 16}}
      />
        
    </SafeArea>
  );
}

export default RestaurantsScreen;

const SearchContainer = styled.View`
  padding : ${(props) => props.theme.space[3]};
`;

