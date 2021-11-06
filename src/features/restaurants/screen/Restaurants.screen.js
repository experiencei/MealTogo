import React from "react";
import styled from "styled-components/native";

import { Searchbar } from "react-native-paper";
import {  FlatList } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import RestaurantInfoCard from "../components/Restaurant-info-card.component";

function RestaurantsScreen() {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <FlatList 
          data={[{name : 1}, {name : 2}, {name : 1}, {name : 2}]}
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

