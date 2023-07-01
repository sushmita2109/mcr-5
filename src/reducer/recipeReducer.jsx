export const initialState = {
  allRecipes: [],
  name: "",
  imageURL: "",
  steps: [],
  ingredients: [],
  cusine: "",
};
export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RECIPES": {
      return {
        ...state,
        allRecipes: action.payload,
      };
    }
    case "DELETE_RECIPE": {
      return {
        ...state,
        allRecipes: [...action.payload],
      };
    }
    default: {
      return state;
    }
  }
};
