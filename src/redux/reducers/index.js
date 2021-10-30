import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";

const reducers = combineReducers({
  allproducts: productReducer,
  product: selectedProductReducer,
  cart: cartReducer,
});

export default reducers;
