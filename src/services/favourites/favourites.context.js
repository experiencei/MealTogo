import React, { createContext, useState, useEffect, useContext } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,

        removeFromFavourites: remove,
      }}
      
    >
        
    </FavouritesContext.Provider>
  );