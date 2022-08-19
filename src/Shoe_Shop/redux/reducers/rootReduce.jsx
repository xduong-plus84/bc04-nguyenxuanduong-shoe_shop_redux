import { combineReducers } from "redux";
import { shoeDetailReducer } from "./detailShoe";
import { shoeListReducer } from "./listShoeReducer";

export let rootReducer__Shoe_shop_redux = combineReducers({
  shoeListReducer: shoeListReducer,
  shoeDetailReducer: shoeDetailReducer,
});
