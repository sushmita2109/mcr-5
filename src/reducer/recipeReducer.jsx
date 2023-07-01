export const initialState = {
  allRecipes: [],
};
export const recipeReducer = (state, action) => {
  switch (action.type) {
    case "GET_RECIPES": {
      return {
        ...state,
        allRecipes: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
