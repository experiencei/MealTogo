import React, { useState, useContext, createContext, useEffect , useMemo } from "react";
import {
    restaurantsRequest,
    restaurantsTransform,
  } from "./restaurants.service";

export const RestaurantsContext = createContext({});


export const RestaurantsContextProvider = ({children}) => {
    <RestaurantsContext.Provider>
          {children}
    </RestaurantsContext.Provider>
}