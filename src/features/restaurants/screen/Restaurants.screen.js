import React, { useContext } from "react";





import styled from "styled-components/native";  

import { ActivityIndicator, Colors } from "react-native-paper";



import {  FlatList, Pressable  } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";

import RestaurantInfoCard from "../components/Restaurant-info-card.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { color } from "react-native-reanimated";
import { Search } from "../components/search.component";






const Loading = styled(ActivityIndicator)`
   margin-left : --25px;
`;

const LoadingContainer = styled.View`
   position: absolute;
   top: 50%;



   left: 50%;
`;

function R  estaurantsScreen() {

  const { isLoading , error , restaurants} = useContext(RestaurantsContext)
  return (

    
    <SafeArea>
      {isLoading && (
      <LoadingContainer>
          <Loading size={50} animating={true} color={color.blue300}/>
      </LoadingContainer>
      )}
      <Search />
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

