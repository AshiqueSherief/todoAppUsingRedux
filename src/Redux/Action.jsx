import { TEXT, DELETE, UPDATE } from "./Type";

export const text = (temp) => {
  return {
    type: TEXT,
    payload: temp,
  };
};
export const deleter = (id) => {
  return { type: DELETE, payload: id };
};
export const updater = (id) => {
  return {
    type: UPDATE,
    payload: id,
  };
};
