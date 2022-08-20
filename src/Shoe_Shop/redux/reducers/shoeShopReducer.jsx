import { ADD_SHOE_LIST } from "../constants/addShoe";
import { dataShoes } from "../dataShoe";
import { SHOW_SHOE_DETAIL } from "../constants/showShoeDetail";
import { REMOVE_SHOE_DETAIL } from "../constants/removeConstants";

let initialState = {
  shoeList: dataShoes,
  cart: [],
  shoeDetail: dataShoes[0],
};

export let shoeShoptReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SHOE_LIST: {
      let cloneCart = [...state.cart];
      let index = state.cart.findIndex((item) => item.id == action.payload.id);

      if (index == -1) {
        let indexInData = dataShoes.findIndex(
          (item) => item.id == action.payload.id
        );
        let shoeInData = dataShoes[indexInData];

        let shoeInCart = { ...shoeInData, soLuong: 1 };

        cloneCart.push(shoeInCart);
      } else {
        cloneCart[index].soLuong += action.payload.value;

        if (cloneCart[index].soLuong < 0) {
          cloneCart[index].soLuong = 0;
        }
      }
      state.cart = cloneCart;
      return { ...state };
    }
    case SHOW_SHOE_DETAIL: {
      let index = dataShoes.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.shoeDetail = dataShoes[index];
      }
      return { ...state };
    }
    case REMOVE_SHOE_DETAIL: {
      console.log("xoá");
      let cloneCart = [...state.cart];
      let index = state.cart.findIndex((item) => item.id == action.payload);
      console.log("index: ", index);

      if (index != -1) {
        cloneCart.splice(index, 1);
      }
      state.cart = cloneCart;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
