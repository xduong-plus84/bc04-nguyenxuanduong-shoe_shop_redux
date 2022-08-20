import { ADD_SHOE_LIST } from "../constants/addShoe";

export let addAction = (id, value) => {
  return {
    type: ADD_SHOE_LIST,
    payload: { id: id, value: value },
  };
};
