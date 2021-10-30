import { ActionsType } from "../constants/ActionsType";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  const data = action.payload;
  switch (action.type) {
    case ActionsType.SET_PRODUCT:
      return {
        ...state,
        products: data,
      };
    default:
      return {
        ...state,
      };
  }
};

export const selectedProductReducer = (state = {}, action) => {
  const product = action.payload;
  switch (action.type) {
    case ActionsType.SELECTED_PRODUCT:
      return {
        ...state,
        ...product,
      };
    default:
      return state;
  }
};
