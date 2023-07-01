import { createContext, useContext, useEffect, useReducer } from "react";
import { recipeReducer, initialState } from "../reducer/recipeReducer";
import { recipes } from "../data/data";

export const ReceipeContext = createContext();

export const ReceipeProvider = ({ children }) => {
  const [ReceipeStates, ReceipeDispatch] = useReducer(
    recipeReducer,
    initialState
  );
  const getData = () => {};
  useEffect(() => {}, []);
  return (
    <ReceipeContext.Provider value={{ ReceipeStates }}>
      {children}
    </ReceipeContext.Provider>
  );
};

export const useRecipe = () => useContext(ReceipeContext);
