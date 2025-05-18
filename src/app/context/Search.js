"use client";
import React from "react";
import { createContext, useContext, useState } from "react";
export const SearchContext = createContext();

// provider
const SearchContextProvider = ({ children }) => {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <SearchContext.Provider value={{ searchActive, setSearchActive }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
export const useSearchContext = () => useContext(SearchContext);
