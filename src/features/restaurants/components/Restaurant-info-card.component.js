/* eslint-disable prettier/prettier */
import React from "react";
import { Text , StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled(Text)`
  font-family :  ${(props) => props.theme.fonts.body};
  padding: ${(props) => props.theme.space[3]};
  color : ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCard = styled(Card)`
    background-color : ${(props) => props.theme.colors.bg.primary};
`;

const  RestaurantCardCover = styled(Card.Cover)`
   padding :${(props) => props.theme.space[3]};
   background-color: ${(props) => props.theme.colors.ui.primary};
`


function RestaurantInfoCard({restaurant = {}}) {
    const {
        name = "Some Restaurant",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
          "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
    } = restaurant;
    return (
        <RestaurantCard elevation={5} >
        <RestaurantCardCover key={name} source={{ uri : photos[0]}}/>
        <Title >{name}</Title>
        </RestaurantCard>
    );
}

export default RestaurantInfoCard;


