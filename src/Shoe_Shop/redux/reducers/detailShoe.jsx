// import { SHOW_SHOE_LIST } from "../constants/showShoeList";

import { SHOW_SHOE_DETAIL } from "../constants/showShoeDetail";
import { dataShoes } from "../dataShoe";

let initialState = {
  shoeDetail: dataShoes[0],
};

export let shoeDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SHOE_DETAIL: {
      console.log("awn switch");
      console.log("state.shoeDetail: ", state.shoeDetail);
      console.log("action.payload", action.payload);
      console.log("shoeDetail.id: ", state.shoeDetail.id);
      let index = dataShoes.findIndex((item) => item.id === action.payload);
      console.log("index: ", index);
      if (index !== -1) {
        state.shoeDetail = dataShoes[index];
      }
      console.log("ngu");
      return { ...state };
    }

    default: {
      console.log("ngu2");
      return { ...state };
    }
  }

  // do lần đầu load trang không có return thì sẽ báo lỗi
};
