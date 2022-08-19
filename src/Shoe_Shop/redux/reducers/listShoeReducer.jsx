// import { SHOW_SHOE_LIST } from "../constants/showShoeList";

import { dataShoes } from "../dataShoe";

let initialState = {
  shoeList: dataShoes,
};

export let shoeListReducer = (state = initialState, action) => {
  return { ...state };
  // do lần đầu load trang không có return thì sẽ báo lỗi
};
