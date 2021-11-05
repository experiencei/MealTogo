import React from "react";
import styled from "styled-components/native";

import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, FlatList } from "react-native";
import RestaurantInfoCard from "../components/Restaurant-info-card.component";

function RestaurantsScreen() {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <FlatList 
          data={[]}
          renderItem={() => <RestaurantInfoCard /> }
          keyExtractor={(item) => item.name}
          contentContainerStyle={{padding: 16}}
      />
        
    </SafeArea>
  );
}

export default RestaurantsScreen;

const SafeArea = styled(SafeAreaView)`
   flex: 1;
  ${StatusBar.currentHeight && ` margin-top: ${StatusBar.currentHeight}px `} ;
`;
const SearchContainer = styled.View`
  padding : ${(props) => props.theme.space[3]};
`;

