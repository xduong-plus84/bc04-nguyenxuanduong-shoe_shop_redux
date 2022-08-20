import { combineReducers } from "redux";
import { shoeShoptReducer } from "./shoeShopReducer";

export let rootReducer__Shoe_shop_redux = combineReducers({
  shoeShoptReducer: shoeShoptReducer,
});
