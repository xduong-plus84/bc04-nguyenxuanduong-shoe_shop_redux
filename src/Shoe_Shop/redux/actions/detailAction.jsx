import { SHOW_SHOE_DETAIL } from "../constants/showShoeDetail";

export let detailAction = (id) => {
  console.log("id: ", id);
  return {
    type: SHOW_SHOE_DETAIL,
    payload: id,
  };
};
