import { ActionsType } from "../constants/ActionsType";
import callApi from "../../api/callApi";

export const actFetchDataRequest = () => {
  return (dispatch) => {
    return callApi("", "GET", null).then((res) => {
      dispatch(actFetchData(res.data));
    });
  };
};

export const actFetchData = (data) => {
  return {
    type: ActionsType.SET_PRODUCT,
    payload: data,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionsType.SELECTED_PRODUCT,
    payload: product,
  };
};

export const actAddToCart = (product, quantity) => {
  return {
    type: ActionsType.ADD_TO_CART,
    payload: { product, quantity },
  };
};

export const actINC = (product) => {
  return {
    type: ActionsType.INC,
    payload: product,
  };
};

export const actDEC = (product) => {
  return {
    type: ActionsType.INC,
    payload: product,
  };
};

export const actRemoveProductCart = (product) => {
  return {
    type: ActionsType.REMOVE_PRODUCT_CART,
    payload: product,
  };
};
