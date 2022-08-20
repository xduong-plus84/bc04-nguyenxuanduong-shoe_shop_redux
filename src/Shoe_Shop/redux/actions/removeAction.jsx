import { REMOVE_SHOE_DETAIL } from "../constants/removeConstants";

export let removeAction = (id) => {
  console.log("id: ", id);
  return {
    type: REMOVE_SHOE_DETAIL,
    payload: id,
  };
};
