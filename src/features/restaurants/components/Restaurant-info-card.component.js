/* eslint-disable prettier/prettier */
import React from "react";
import { Text , StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

import { Card } from "react-native-paper";
import styled from "styled-components/native";



const Address =styled(Text)`
   font-family :  ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`
const Title = styled(Text)`
  font-family :  ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color : ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCard = styled(Card)`
    background-color : ${(props) => props.theme.colors.bg.primary};
`;

const  RestaurantCardCover = styled(Card.Cover)`
   padding :${(props) => props.theme.space[3]};
   background-color: ${(props) => props.theme.colors.ui.primary};
`
const Info = styled.View`
   padding: ${(props) => props.theme.space[3]};
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
  
const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={5} >
        <RestaurantCardCover key={name} source={{ uri : photos[0]}}/>
        <Info>
         <Title >{name}</Title>
         <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
                />
         <Address>{name}</Address>
        </Info>
        
        </RestaurantCard>
    );
}

export default RestaurantInfoCard;


