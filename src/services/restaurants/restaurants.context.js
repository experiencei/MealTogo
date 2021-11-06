import React, { useState, useContext, createContext, useEffect , useMemo } from "react";
import {
    restaurantsRequest,
    restaurantsTransform,
  } from "./restaurants.service";

export const RestaurantsContext = createContext({}) => {
    const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    retrieveRestaurants()
  }, [input])
}


export const RestaurantsContextProvider = ({children}) => {
    <RestaurantsContext.Provider
       value={{
        restaurants: [ 1 , 2 , 3 , 4 , 5 , 6, 7]
        
      }}
    >
          {children}
    </RestaurantsContext.Provider>
}