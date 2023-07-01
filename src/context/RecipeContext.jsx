import React, { createContext, useContext, useEffect, useReducer } from "react";
import { recipeReducer, initialState } from "../reducer/recipeReducer";
import { recipes } from "../data/recipes";

export const ReceipeContext = createContext();

export const ReceipeProvider = ({ children }) => {
  const [receipeStates, receipeDispatch] = useReducer(
    recipeReducer,
    initialState
  );

  const getData = () => {
    console.log("....", recipes);
    receipeDispatch({ type: "GET_RECIPES", payload: recipes });
  };

  useEffect(() => {
    console.log("useEffect---->");
    getData();
  }, []);

  //   console.log("-->", recipes);
  return (
    <ReceipeContext.Provider value={{ receipeStates, receipeDispatch }}>
      {children}
    </ReceipeContext.Provider>
  );
};

export const useRecipe = () => useContext(ReceipeContext);
